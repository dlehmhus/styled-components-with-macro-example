import React from "react";
import { css } from "styled-components/macro";
import Icons from "./icons";

const someCss = css`
  background: purple;
`;

const App: React.FC = () => {
  return <Icons.Foo css={someCss} />;
};

export default App;
