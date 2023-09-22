// Creating a deeppartial<T> type

type partialPrimitive = string | number | boolean | Date | Function;
type DeepPartial<T> = T extends partialPrimitive
    ? T
    : Partial<T>;

