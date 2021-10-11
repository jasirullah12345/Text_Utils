import React , {useState} from 'react';

const About = () => {
    // const [Mode, setMode] = useState("bg-light text-dark");
    const toggleMode = () => {
        console.log("Hello toggle.");
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row g-3 border border-1 border-info p-3 rounded">
                    <div className="col-xs-12">
                        <div className="card text-danger">
                            <div className="card-body">
                                <h3 className="card-title">About Us</h3>
                                <p className="card-text">This is about us paragraph</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card text-danger">
                            <div className="card-body">
                                <h3 className="card-title">Contact Us</h3>
                                <p className="card-text">This is our phone no.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card text-danger">
                            <div className="card-body">
                                <h3 className="card-title">Contact Us</h3>
                                <p className="card-text">This is our phone no.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Toggle Button*/}
            <div className="container mt-3">
                <button type="button" className="btn btn-outline-dark btn-sm" onClick={toggleMode}>
                    Enable Dark Mode
                </button>
            </div>
        </>
    );
};

export default About;
