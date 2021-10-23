import React, {useState} from 'react';

const About = () => {
    document.title = "Text Utils - About";
    const [myStyle, setMyStyle] = useState({
        backgroundColor: "white",
        color: "black"
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const toggleMode = () => {
        if (myStyle.backgroundColor === "white") {
            setMyStyle({
                backgroundColor: "black",
                color: "white"
            });
            setBtnText("Enable Light Mode");
        } else {
            setMyStyle({
                backgroundColor: "white",
                color: "black"
            });
            setBtnText("Enable Dark Mode");
        }
    };
    return (
        <>
            <div className="container mt-5">
                <div className="row g-3 border border-1 p-3 rounded" style={myStyle}>
                <h2>About Us</h2>
                    <div className="col-xs-12">
                        <div className="card">
                            <div className="card-body" style={myStyle}>
                                <h3 className="card-title">About Us</h3>
                                <p className="card-text">This is about us paragraph</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body" style={myStyle}>
                                <h3 className="card-title">Contact Us</h3>
                                <p className="card-text">This is our phone no.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body" style={myStyle}>
                                <h3 className="card-title">Contact Us</h3>
                                <p className="card-text">This is our phone no.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Toggle Button*/}
            <div className="container mt-3">
                <button type="button" className="btn btn-outline-dark btn-sm" onClick={toggleMode}>
                    {btnText}
                </button>
            </div>
        </>
    );
};

export default About;
