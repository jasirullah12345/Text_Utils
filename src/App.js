import React, {useState} from 'react';
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForm";

const App = () => {
    // States
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor= "#0b3256";
        } else {
            setMode("light");
            document.body.style.backgroundColor= "white";
        }
    };

    return (
        <>
            <Navbar title="Text Utils" toggleMode={toggleMode} mode={mode}/>
            <TextForm mode={mode}/>
            {/*<About/>*/}
        </>
    );
};

export default App;
