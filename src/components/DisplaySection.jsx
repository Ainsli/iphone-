import React from "react";

function DisplaySection({ triggerPreview }) {
    return (
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">Brillient.</p>
            <span className="description">A display 2x bigger in the sun</span>
            <button className="button" onClick={triggerPreview}>Try me!</button>
            <button className="back-button">TOP</button>
        </div>
    );
}

export default DisplaySection;