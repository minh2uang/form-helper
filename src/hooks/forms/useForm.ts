import { useCallback, useEffect, useRef, useState } from "react";

export type DeepReadOnly<T> = {
  readonly [key in keyof T]: T[key] extends () => void
    ? DeepReadOnly<T[key]>
    : T[key];
};

export type Stringify<T> = { [key in keyof T]: string };

export type Booleanise<T> = { [key in keyof T]: boolean };

const useForm = <Form>({
  defaultValues,
  validates,
  initialiser,
}: {
  defaultValues?: Partial<Form>;
  initialiser?: () => Promise<Form>;
  validates?: Partial<{
    [key in keyof Form]: (value: Form[key]) => string;
  }>;
}) => {
  type ReadonlyForm = DeepReadOnly<Form>;
  type StringifiedForm = Stringify<Form>;
  type BooleanisedForm = Booleanise<Form>;
  type ReadonlyStringifiedForm = DeepReadOnly<StringifiedForm>;
  type ReadonlyBooleanisedForm = DeepReadOnly<BooleanisedForm>;

  // any field can be undefined technically ... validates will handle validation
  const [formValues, setFormValues] = useState<Partial<Form>>(
    defaultValues || {}
  );
  const defaultValuesRef = useRef(defaultValues);
  useEffect(() => {
    if (initialiser && !defaultValuesRef.current) {
      console.log("Getting data");
      const initialiseFormValues = async () => {
        const values = await initialiser();
        setFormValues(values);
        defaultValuesRef.current = values;
      };
      void initialiseFormValues();
    }
  }, [initialiser]);
  const [errors, setErrors] = useState<Partial<StringifiedForm>>({});
  const [isTouchedValues, setIsTouchedValues] = useState<
    Partial<BooleanisedForm>
  >({});
  const [isSubmitting, setIsSubmiting] = useState<boolean>(false);

  const setValue = useCallback(
    <Key extends keyof Form>(key: Key, newValue: Form[Key]) =>
      setFormValues((cur) => ({ ...cur, [key]: newValue })),
    []
  );

  const setValues = useCallback(
    (newValues: Form) => setFormValues(newValues),
    []
  );

  const setError = useCallback(
    (key: keyof Form, newValue: string) =>
      setErrors((cur) => ({ ...cur, [key]: newValue })),
    []
  );

  const setTouched = useCallback(
    (key: keyof Form, newValue: boolean) =>
      setIsTouchedValues((cur) => ({ ...cur, [key]: newValue })),
    []
  );

  const clearForm = useCallback(
    () => setFormValues(defaultValues || {}),
    [defaultValues]
  );

  const register = useCallback(
    <Key extends keyof Form>(key: Key) => {
      const value = formValues && formValues[key];
      return {
        value,
        label: key,
        error: errors[key],
        isDirty: isTouchedValues[key],
        onChange: (newValue: Form[typeof key]) => {
          setValue(key, newValue);
          if (validates) {
            const validate = validates[key];
            const errorMsg = validate && validate(newValue);
            setError(key, errorMsg);
          }
        },
        onFocus: () => {
          setTouched(key, true);
        },
        clearForm,
      };
    },
    [
      errors,
      formValues,
      isTouchedValues,
      clearForm,
      setError,
      setTouched,
      setValue,
      validates,
    ]
  );

  const isFormTouched = Object.values(isTouchedValues).some((a) => a);

  const isValid = !Object.values(errors).some((a) => !!a);

  const handleSubmit =
    (onSubmit: (toSubmit: ReadonlyForm) => Promise<void>) => async () => {
      try {
        setIsSubmiting(true);
        await onSubmit(formValues as ReadonlyForm);
      } catch {
      } finally {
        setIsSubmiting(false);
      }
    };

  const isSubmittable = isFormTouched && !isSubmitting && isValid;
  return {
    formValues: formValues as ReadonlyForm,
    errors: errors as ReadonlyStringifiedForm,
    isTouchedValues: isTouchedValues as ReadonlyBooleanisedForm,
    setValue,
    setValues,
    defaultValues: defaultValuesRef.current as ReadonlyForm,
    setError,
    register,
    handleSubmit,
    isSubmittable,
    isSubmitting,
    clearForm,
  };
};

export default useForm;
