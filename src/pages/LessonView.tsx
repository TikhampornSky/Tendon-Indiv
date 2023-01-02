import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";

import { useTendonContainer } from "../services/container";
import LessonDataViewModel from "./LessonViewModel";
import { Lesson } from "../interfaces/TendonType";
import { token } from "../_demo_setting";

interface propsInterface {
    body: Lesson
}

export const LessonCreateHandle = observer((props: propsInterface) => {
    const body = props.body
    const [lessonView, setLessonView] = useState<Lesson>({} as Lesson)
    const [message, setMessage] = useState<String>("")
    const [status, setStatus] = useState<Number>(0)   
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

export const LessonGetHandle = observer((props: propsInterface) => {              
    const lesson_id = props.body.id
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

export const LessonUpdateHandle = observer((props: propsInterface) => {              
    const body = props.body
    const lesson_id = props.body.id
    const [lessonView, setLessonView] = useState<Lesson>({} as Lesson)  
    const [message, setMessage] = useState<String>("")
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

export const LessonDeleteHandle = observer((props: propsInterface) => { 
    const lesson_id = props.body.id
    const [deleteStatus, setDeleteStatus] = useState<Number>(0)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new LessonDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.deleteLesson(lesson_id, token)
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