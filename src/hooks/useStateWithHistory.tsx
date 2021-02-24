import { useStackWithCursor } from "./useStackWithCursor";

export const useStateWithHistory = (initialValue: any) => {
  const { stack, push: stackPush, cursor, moveCursor } = useStackWithCursor(
    getInitialState(initialValue)
  );

  const nextValue = (value: any) => {
    stackPush(value);
  };

  const currentValue = stack[cursor];

  return [
    currentValue,
    nextValue,
    {
      history: stack,
      moveCursor,
      cursor,
    },
  ];
};

const getInitialState = (valueOrFn: any) => {
  if (typeof valueOrFn === "undefined") return [];

  let initialValue;
  if (typeof valueOrFn === "function") {
    initialValue = valueOrFn();
  } else {
    initialValue = valueOrFn;
  }
  return [initialValue];
};
