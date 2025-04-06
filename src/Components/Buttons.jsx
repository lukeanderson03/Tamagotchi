import React from "react";


export function Button({ text }) {
    return (
        <button className="text-white bg-amber-600 w-20 border-solid">{text ? text : "Click"}</button>
    );
};
