export const classMerge = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join("");

export const deepMerge = <
  T extends Record<string, unknown>,
  U extends Record<string, unknown>,
>(
  obj1: T,
  obj2: U
): T & U => {
  const result = { ...obj1 } as T & U;

  Object.keys(obj2).forEach((key) => {
    const value = obj2[key];
    if (obj2[key] && typeof obj2[key] === "object") {
      if (result[key] && typeof result[key] === "object") {
        // @ts-expect-error : color를 정의한 객체를 병합할 떄, 타입 지정이 어려워 선언
        result[key] = deepMerge(
          result[key] as Record<string, unknown>,
          value as Record<string, unknown>
        );
      } else {
        // @ts-expect-error : color를 정의한 객체를 병합할 떄, 타입 지정이 어려워 선언
        result[key] = value;
      }
    } else {
      // @ts-expect-error : color를 정의한 객체를 병합할 떄, 타입 지정이 어려워 선언
      result[key] = value;
    }
  });

  return result;
};
