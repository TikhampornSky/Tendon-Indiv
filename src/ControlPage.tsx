import React from "react";

export default function ControlPage() {
    return (
        <>
            <div id="sidebar">
            <h1> Control Page </h1>
            <nav>
            <div>
                <p>
                    <a href={`contacts/1`}> User </a>
                </p>
                <p>
                    <a href={`contacts/1`}> Sign </a>
                </p>
                <p>
                    <a href={`contacts/1`}> Node </a>
                </p>
                <p>
                    <a href={`contacts/2`}> Lesson </a>
                </p>
                <p>
                    <a href={`contacts/1`}> Course </a>
                </p>
            </div>
            </nav>
            </div>
            <div id="detail"></div>
        </>
    )
}