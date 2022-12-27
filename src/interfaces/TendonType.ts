export interface user {
    type: string
    id: string
    firstName: string
    lastName: string
    email: string
    role: string
    createAt: string
    updateAt: string
}

export interface course {
    id: string
    name: string
    description: string
    access: string
    createBy: string
    updateAt: string
    lesssons: string[]
}

export interface lesson {
    id: string
    name: string
    description: string
    access: string
    createBy: string
    updateAt: string
    nodes: string[]
    nextLesson: string[]
    prevLesson: string[]
}

export interface node{
    id: string
    type: string
    data: string
    createBy: string
    updateAt: string
}