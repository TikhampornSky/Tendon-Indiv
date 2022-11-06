export interface userInterface {
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    password: String,
    createAt: Number,
    updateAt: Number
}

export interface briefCurriculumInterface {
    id: String,
    curriculumName: String,
    curriculumDescription: String,
    accessLevel: String,
    proGress: Number,
}

export interface curriculumInterface {
    id: String,
    curriculumName: String,
    curriculumDescription: String,
    accessLevel: String,
    proGress: Number,
    subLearningNode: briefCurriculumInterface[],
}

export interface briefLearningNodeInterface {
    id: String,
    curriculums: briefCurriculumInterface[],
    learningNodeName: String,
    learningNodeDescription: String,
}

export interface learningNodeInterface {          
    id: String,
    learningNodeName: String,
    learningNodeDescription: String,
    curriculums: briefCurriculumInterface[]
    subNode: nodeInterface[],
    nextLearningNodeId: briefLearningNodeInterface[],
    previousLearningNodeId: briefLearningNodeInterface[],
}

export interface nodeInterface {
    id: String,
    priority: String,
    size: Number,
    resources: String
}