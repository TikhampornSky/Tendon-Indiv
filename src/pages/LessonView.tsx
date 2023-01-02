import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";

import { useTendonContainer } from "../services/container";
import LessonDataViewModel from "./LessonViewModel";
import { Lesson } from "../interfaces/TendonType";
import { token } from "../_demo_setting";
import { lesson_id, lesson_id_delete } from "../_demo_setting";

export const LessonCreateHandle = observer(() => {

    const [lessonView, setLessonView] = useState<Lesson>({} as Lesson)
    const [message, setMessage] = useState<String>("")
    const [status, setStatus] = useState<Number>(0)   
    var body: Lesson = {
        name: "NewLesson",
        description: "LLL",
        access: "public",
        nodes: ["63ac57f9e68081422d62ee66"],
        nextLesson: ["63ad011be68081422d62efa5", "63ad01bfe68081422d62efa6"],
        prevLesson: ["63ad01bfe68081422d62efa6"],
        createBy: "",
        updateAt: "",
        id: "",
    }
    const viewModel = new LessonDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.createLesson(body, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setLessonView(viewModel.getLesson())
        setMessage(viewModel.getMessage())
        setStatus(viewModel.getStatus())
    })

    if (status === 201) {
        return (
            <div>
                <p> [ Lesson POST ] </p>
                <LessonView viewModel={ lessonView } />
            </div>              
        )
    } else {
        if (message === "") {
            return (
                <div> Loading... </div>
            )
        }
        return (
            <div>
                <p> "Lesson POST ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }
})

export const LessonGetHandle = observer(() => {              

    const [lessonView, setLessonView] = useState<Lesson>({} as Lesson)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new LessonDataViewModel(useTendonContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.getLessonData(lesson_id, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setLessonView(viewModel.getLesson())
        setMessage(viewModel.getMessage())
    })

    if (lessonView.id === undefined) {
        if (message === "") {
            return (
                <div> Loading... </div>
            )
        }
        return (
            <div>
                <p>  "LESSON GET ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }

    return (
        <div>
                <p> [ LESSON GET ] </p>
                <LessonView viewModel={ lessonView } />
        </div>              
    )
})

export const LessonUpdateHandle = observer(() => {              

    const [lessonView, setLessonView] = useState<Lesson>({} as Lesson)  
    const [message, setMessage] = useState<String>("")
    var body: Lesson = {
        name: "NewLesson",
        description: "LLLLLLL",
        access: "public",
        nodes: ["63ac57f9e68081422d62ee66"],
        nextLesson: ["63ad011be68081422d62efa5"],
        prevLesson: ["63ad01bfe68081422d62efa6"],
        createBy: "",
        updateAt: "",
        id: "",
    }
    const viewModel = new LessonDataViewModel(useTendonContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.updateLessonData(lesson_id, token, body)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setLessonView(viewModel.getLesson())
        setMessage(viewModel.getMessage())
    })

    if (lessonView.id === undefined) {
        if (message === "") {
            return (
                <div> Loading... </div>
            )
        }
        return (
            <div>
                <p> "LESSON UPDATE ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }

    return (
        <div>
            <p> [ LESSON UPDATE ] </p>
            <LessonView viewModel={lessonView}/>
        </div>              
    )
})

export const LessonDeleteHandle = observer(() => { 

    const [deleteStatus, setDeleteStatus] = useState<Number>(0)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new LessonDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.deleteLesson(lesson_id_delete, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setDeleteStatus(viewModel.getStatus())
        setMessage(viewModel.getMessage())
    })

    if (deleteStatus === 200) {
        return (
            <div>
                <p> [ LESSON DELETE ] </p>
                <p> Delete Complete </p>
            </div>              
        )
    } else {
        if (message === "") {
            return (
                <div> Loading... </div>
            )
        }
        return (
            <div>
                <p> "LESSON DELETE ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }
})

interface ShowDataViewProps {
    viewModel: Lesson
}

const LessonView = observer(( {viewModel}: ShowDataViewProps) => {
    return (
        <div>
                <div key= {viewModel.id}>
                    <p> #### {viewModel.id} #### </p>
                    <li> {viewModel.name} </li>
                    <li> {viewModel.description} </li>
                    <li> {viewModel.nodes} </li>
                    <li> {viewModel.prevLesson} </li>
                    <li> {viewModel.nextLesson} </li>
                    <hr></hr>
                </div>
        </div>
    )
})