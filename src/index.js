import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./MyComponents/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import TextForm from "./MyComponents/TextForm";
import About from "./MyComponents/About";

ReactDOM.render(
    <React.StrictMode>

        <Navbar title="Text Utils"/>

        {/*<TextForm/>*/}
<About/>

    </React.StrictMode>,
    document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
