//require("file-loader?name=[name].[ext]!./index.html");
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";

ReactDOM.render(
    <App />,
    document.getElementById("app")
);