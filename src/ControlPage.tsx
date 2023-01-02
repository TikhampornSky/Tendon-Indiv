import React from "react";
import './ControlPage.css'

export default function ControlPage() {
    return (
        <>
            <div id="sidebar">
            <h1 style={{color: "pink"}} > Control Page </h1>
            <nav>
            <div>
                <p className="button-menu">
                    <a href={`admin/user`}> User </a>
                </p>
                <p className="button-menu">
                    <a href={`admin/sign`}> Sign </a>
                </p>
                <p className="button-menu">
                    <a href={`admin/node`}> Node </a>
                </p>
                <p className="button-menu">
                    <a href={`admin/lesson`}> Lesson </a>
                </p>
                <p className="button-menu">
                    <a href={`admin/course`}> Course </a>
                </p>
            </div>
            </nav>
            </div>
            <div id="detail"></div>
        </>
    )
}