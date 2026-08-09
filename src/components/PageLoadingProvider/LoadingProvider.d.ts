/// <reference types="react" />
declare const LoadingProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react").JSX.Element;
export declare const LoadableChildren: React.FunctionComponent<{
    children: JSX.Element;
}>;
export default LoadingProvider;
export declare const useLoading: () => [boolean, (value: boolean) => void];
//# sourceMappingURL=LoadingProvider.d.ts.map