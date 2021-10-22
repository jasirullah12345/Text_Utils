import React, {useState} from 'react';
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForm";
import Alert from "./MyComponents/Alert";

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
            <Navbar title="Text Utils" toggleMode={toggleMode} mode={mode}/>
            <Alert alert={alertSection}/>
            <TextForm mode={mode} alert={showAlert}/>
            {/*<About/>*/}
        </>
    );
};

export default App;
