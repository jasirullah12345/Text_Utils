import React, {useState} from "react";

export default function TextForm(props) {

    document.title = "Text Utils - Home";

    const [text, setText] = useState("");

    const textChange = (event) => {
        setText(event.target.value);
    };

    const upperCase = () => {
        setText(text.toUpperCase());
        props.alert("success", "Text converted to uppercase");
    };

    const lowerCase = () => {
        setText(text.toLowerCase());
        props.alert("success", "Text converted to lowercase");
    };

    const clear = () => {
        setText("");
        props.alert("danger", "Text cleared");
    };

    const copy = () => {
        navigator.clipboard.writeText(text);
        props.alert("success", "Text copied");
    };

    const removeExtraSpaces = () => {
        let target = text.split(/[ ]+/);
        setText(target.join(" "));
        props.alert("success", "Extra spaces removed");
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
                            backgroundColor: props.mode === "dark" ? "#0d5ba3" : "white",
                            color: props.mode === "dark" ? "white" : "black"
                        }}
                        id="text"
                        rows="8"
                        onChange={textChange}
                        value={text}
                    />
                    <button
                        type="button"
                        className="btn btn-sm btn-primary mt-3 mx-1 ms-0"
                        onClick={upperCase}
                        disabled={text.length === 0}
                    >
                        Convert to Uppercase
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-success mt-3 mx-1"
                        onClick={lowerCase}
                        disabled={text.length === 0}
                    >
                        Convert to Lowercase
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-danger mt-3 mx-1"
                        onClick={clear}
                        disabled={text.length === 0}
                    >
                        Clear Text
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-warning mt-3 mx-1"
                        onClick={copy}
                        disabled={text.length === 0}
                    >
                        Copy Text
                    </button>
                    <button type="button" className="btn btn-sm btn-info mt-3 mx-1"
                            disabled={text.length === 0}
                            onClick={removeExtraSpaces}>
                        Remove Extra Spaces
                    </button>
                </div>
                <div className={`summary  text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <h3 className="my-3">Summary of Text</h3>
                    <p>
                        {text.split(/\s+/g).filter((element) => {
                            return element.length !== 0
                        }).length} Words and {text.length} characters.
                    </p>
                    <p>
                        {0.008 * text.split(/\s+/g).filter((element) => {
                            return element.length !== 0
                        }).length} Minutes to read this text.
                    </p>
                </div>
                <div className={`preview  text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <h3 className="my-3">Preview</h3>
                    <p>{text.split(/\s+/g).filter((element) => {
                        return element.length !== 0
                    }).length > 0 ? text : 'Enter text to preview.'}</p>
                </div>
            </div>
        </>
    );
}
