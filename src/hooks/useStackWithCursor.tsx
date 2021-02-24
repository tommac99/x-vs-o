import { useState, useEffect } from "react";

export const useStackWithCursor = (initalArray: any) => {
  const [stack, setStack] = useState(initalArray || []);
  const [cursor, setCursor] = useState(stack.length - 1);

  useEffect(() => {
    setCursor(stack.length - 1);
  }, [stack]);

  const moveCursor = (indexPosition: any) => {
    setCursor(indexPosition);
  };

  const push = (value: any) => {
    const nextStack = stack.slice(0, cursor + 1);
    nextStack.push(value);
    setStack(nextStack);
  };

  const pop = () => {
    const nextStack = stack.slice(0, cursor + 1);
    const popedValue = nextStack.pop();
    setStack(nextStack);
    return popedValue;
  };

  return {
    stack,
    push,
    pop,
    cursor,
    moveCursor,
  };
};
