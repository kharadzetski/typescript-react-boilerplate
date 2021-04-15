import React, { FC, useCallback, useState } from "react";

import { increment } from "@renderer/utils/increment";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Main: FC<HelloProps> = (props) => {
  const [counter, setCounter] = useState(0);
  const btnClick = useCallback(
    () => setCounter((counter) => increment(counter)),
    [setCounter]
  );
  return (
    <h1 onClick={btnClick}>
      Hello from {props.compiler} and {props.framework}! Click counter is{" "}
      {counter}
    </h1>
  );
};
