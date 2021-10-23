import React from 'react';

const About = (props) => {
    document.title = "Text Utils - About";
    let myStyle = {
        backgroundColor: props.mode==="dark" ?"#213a4e":"white",
        color:  props.mode==="dark" ?"white":"black"
    };
    return (
        <>
            <div className="container mt-5">
                <div className="row g-3 border border-1 p-3 pb-4 rounded" style={myStyle}>
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
        </>
    );
};

export default About;
