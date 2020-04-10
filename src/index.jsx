import React from "react";
import {render} from "react-dom";

import Styles from "./styles/main.scss";
import App from "./components/App.jsx";

const wrapper = document.querySelector(".app-wrapper");

render(<App />, wrapper);