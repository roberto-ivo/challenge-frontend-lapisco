import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/home/Home";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 40px;
    background: #161D30;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
