'use function'

export const getFunctionName = async (fn: Function) => {
  return fn.toString()
}
