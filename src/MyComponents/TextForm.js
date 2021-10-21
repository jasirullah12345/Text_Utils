import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const textChange = (event) => {
        setText(event.target.value);
    };

    const upperCase = () => {
        setText(text.toUpperCase());
    };

    const lowerCase = () => {
        setText(text.toLowerCase());
    };

    const clear = () => {
        setText("");
    };

    const copy = () => {
        setText("copy");
    };

    const removeExtraSpaces = () => {
        setText("Remove Extra Spaces.")
    };

    return (
        <>
            <div className="container">
                <div>
                    <label htmlFor="text"
                           className={`form-label h3 mt-3 mb-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        Enter text to manipulate it.
                    </label>
                    <textarea
                        className="form-control"
                        style={{
                            backgroundColor: props.mode === "dark" ? "#6c6b6b" : "white",
                            color: props.mode === "dark" ? "white" : "black"
                        }}
                        id="text"
                        rows="8"
                        onChange={textChange}
                        value={text}
                    />
                    <button
                        type="button"
                        className="btn btn-primary mt-3 mx-1 ms-0"
                        onClick={upperCase}
                    >
                        Convert to Uppercase
                    </button>
                    <button
                        type="button"
                        className="btn btn-success mt-3 mx-1"
                        onClick={lowerCase}
                    >
                        Convert to Lowercase
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger mt-3 mx-1"
                        onClick={clear}
                    >
                        Clear Text
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning mt-3 mx-1"
                        onClick={copy}
                    >
                        Copy Text
                    </button>
                    <button type="button" className="btn btn-info mt-3 mx-1"
                            onClick={removeExtraSpaces}>
                        Remove Extra Spaces
                    </button>
                </div>
                <div className={`summary  text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <h3 className="my-3">Summary of Text</h3>
                    <p>
                        {text.split(" ").length} Words and {text.length} characters.
                    </p>
                    <p>
                        {0.008 * text.split(" ").length} Minutes to read this text.
                    </p>
                </div>
                <div className={`preview  text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <h3 className="my-3">Preview</h3>
                    <p>{text.length > 0 ? text : 'Enter text to preview.'}</p>
                </div>
            </div>
        </>
    );
}
