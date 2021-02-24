import { useState, useEffect } from "react";

export const useStackWithCursor = (initalArray: any) => {
  const [stack, setStack] = useState(initalArray || []);
  const [cursor, setCursor] = useState(stack.length - 1);

  useEffect(() => {
    setCursor(stack.length - 1);
  }, [stack]);

  function moveCursor(indexPosition: any) {
    setCursor(indexPosition);
  }

  function push(value: any) {
    const nextStack = stack.slice(0, cursor + 1);
    nextStack.push(value);
    setStack(nextStack);
  }

  function pop() {
    const nextStack = stack.slice(0, cursor + 1);
    const popedValue = nextStack.pop();
    setStack(nextStack);
    return popedValue;
  }

  return {
    stack,
    push,
    pop,
    cursor,
    moveCursor,
  };
};
