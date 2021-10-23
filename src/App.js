import React, {useState} from 'react';
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForm";
import Alert from "./MyComponents/Alert";
import About from "./MyComponents/About";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    // States
    const [mode, setMode] = useState("light");
    const [alertSection, setAlertSection] = useState(null);

    const showAlert = (type, msg) => {
        setAlertSection({
            type: type,
            msg: msg
        });
        setTimeout(() => {
            setAlertSection(null);
        }, 1500);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#0b3256";
            showAlert("success", "Dark Mode Enabled");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("success", "Light Mode Enabled");
        }
    };

    return (
        <>
            <Router>
                <Navbar title="Text Utils" toggleMode={toggleMode} mode={mode}/>
                <Alert alert={alertSection}/>
                <Switch>
                    <Route exact path="/">
                        <TextForm mode={mode} alert={showAlert}/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
