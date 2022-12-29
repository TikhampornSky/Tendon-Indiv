import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";

import { useTendonContainer } from "../services/container";
import CourseShowDataViewModel from "./CourseViewModel";
import { Course } from "../interfaces/TendonType";
import { token, course_id, course_id_delete } from "../_demo_setting";

export const CourseCreateHandle = observer(() => {

    const [courseView, setCourseView] = useState<Course>({} as Course)
    const [message, setMessage] = useState<String>("")
    const [status, setStatus] = useState<Number>(0)   
    var body: Course = {
        name: "NewCourse",
        description: "CourseDescription ~ ~ ~",
        access: "public",
        lessons: ["63ad01bfe68081422d62efa6"],
        createBy: "",
        updateAt: "",
        id: "",
    }
    const viewModel = new CourseShowDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.createCourse(body, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setCourseView(viewModel.getCourse())
        setMessage(viewModel.getMessage())
        setStatus(viewModel.getStatus())
    })

    if (status === 201) {
        return (
            <div>
                <p> [ Course POST ] </p>
                <CourseView viewModel={ courseView } />
            </div>              
        )
    } else {
        return (
            <div>
                <p> "Course POST ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }
})

export const CourseGetHandle = observer(() => {              

    const [courseView, setCourseView] = useState<Course>({} as Course)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new CourseShowDataViewModel(useTendonContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.getCourseData(course_id, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setCourseView(viewModel.getCourse())
        setMessage(viewModel.getMessage())
    })

    if (courseView.id === undefined) {
        return (
            <div>
                <p>  "Course GET ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }

    return (
        <div>
                <p> [ Course GET ] </p>
                <CourseView viewModel={ courseView } />
        </div>              
    )
})

export const CourseUpdateHandle = observer(() => {              

    const [courseView, setCourseView] = useState<Course>({} as Course)  
    const [message, setMessage] = useState<String>("")
    var body: Course = {
        name: "NewUpdated Physics Course",
        description: "CourseDescription 66777",
        access: "public",
        lessons: ["63ad01bfe68081422d62efa6"],
        createBy: "63a6fad6e68081422d62ed24",
        updateAt: "",
        id: "",
    }
    const viewModel = new CourseShowDataViewModel(useTendonContainer())
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.updateCourseData(course_id, token, body)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setCourseView(viewModel.getCourse())
        setMessage(viewModel.getMessage())
    })

    if (courseView.id === undefined) {
        return (
            <div>
                <p> "Course UPDATE ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }

    return (
        <div>
            <p> [ Course UPDATE ] </p>
            <CourseView viewModel={courseView}/>
        </div>              
    )
})

export const CourseDeleteHandle = observer(() => { 

    const [deleteStatus, setDeleteStatus] = useState<Number>(0)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new CourseShowDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.deleteCourse(course_id_delete, token)
            myResolve(tmpValue)
        }, [])
    }).then(() => {
        setDeleteStatus(viewModel.getStatus())
        setMessage(viewModel.getMessage())
    })

    if (deleteStatus === 200) {
        return (
            <div>
                <p> [ Course DELETE ] </p>
                <p> Delete Complete </p>
            </div>              
        )
    } else {
        return (
            <div>
                <p> "Course DELETE ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }
})

interface ShowDataViewProps {
    viewModel: Course
}

const CourseView = observer(( {viewModel}: ShowDataViewProps) => {
    return (
        <div>
                <div key= {viewModel.id}>
                    <p> #### {viewModel.id} #### </p>
                    <li> {viewModel.name} </li>
                    <li> {viewModel.description} </li>
                    <li> {viewModel.lessons} </li>
                    <hr></hr>
                </div>
        </div>
    )
})