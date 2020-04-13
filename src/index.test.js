import React, { useState, useEffect } from "react";
import { cleanup, render } from "react-testing-library";

const App = () => {
  const [letter, setLetter] = useState(true);

  useEffect(() => {
    setLetter(false);
  }, [letter]);

  return (
    <div>{letter === true && <button data-testid="myButton">Go</button>}</div>
  );
};

afterEach(cleanup);

it("React test", () => {
  const { queryByTestId, rerender } = render(<App />);
  rerender(<App />);
  expect(queryByTestId("myButton")).toBeFalsy();
});
