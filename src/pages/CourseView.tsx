import React from "react"
import { observer } from "mobx-react"
import { useState, useEffect } from "react";

import { useTendonContainer } from "../services/container";
import CourseDataViewModel from "./CourseViewModel";
import { Course } from "../interfaces/TendonType";
import { token } from "../_demo_setting";

interface propsInterface {
    body: Course
}

export const CourseCreateHandle = observer((props: propsInterface) => {
    const body = props.body
    const [courseView, setCourseView] = useState<Course>({} as Course)
    const [message, setMessage] = useState<String>("")
    const [status, setStatus] = useState<Number>(0)   
    const viewModel = new CourseDataViewModel(useTendonContainer())

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
        if (message === "") {
            return (
                <div> Loading... </div>
            )
        }
        return (
            <div>
                <p> "Course POST ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }
})

export const CourseGetHandle = observer((props: propsInterface) => {              
    const course_id = props.body.id
    const [courseView, setCourseView] = useState<Course>({} as Course)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new CourseDataViewModel(useTendonContainer())
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
        if (message === "") {
            return (
                <div> Loading... </div>
            )
        }
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

export const CourseUpdateHandle = observer((props: propsInterface) => {              
    const course_id = props.body.id
    const body = props.body
    const [courseView, setCourseView] = useState<Course>({} as Course)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new CourseDataViewModel(useTendonContainer())
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
        if (message === "") {
            return (
                <div> Loading... </div>
            )
        }
        return (
            <div>
                <p> Update Lesson is out-of-service </p>
                <p> "Course UPDATE ERROR ZONE: " </p>
                <p> { message } </p>
            </div>              
        )
    }

    return (
        <div>
            <p> Update Lesson is out-of-service </p>
            <p> [ Course UPDATE ] </p>
            <p> Updated Successfully!</p>
        </div>              
    )
})

export const CourseDeleteHandle = observer((props: propsInterface) => { 
    const course_id = props.body.id
    const [deleteStatus, setDeleteStatus] = useState<Number>(0)  
    const [message, setMessage] = useState<String>("")
    const viewModel = new CourseDataViewModel(useTendonContainer())

    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.deleteCourse(course_id, token)
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
        if (message === "") {
            return (
                <div> Loading... </div>
            )
        }
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
                    <li> lessons: 
                        {viewModel.lessons.map((data: string) => (
                            <div key= {data}>
                                <p> {data} </p>
                            </div>
                        ))}
                    </li>
                    <hr></hr>
                </div>
        </div>
    )
})