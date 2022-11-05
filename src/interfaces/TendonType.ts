export interface userInterface {
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    password: String,
}

export interface curriculumInterface {
    id: String,
    curriculumName: String,
    curriculumDescription: String,
    accessLevel: String,
    proGress: Number,
    subLearningNode: learningNodeInterface[],
    type: String
}

export interface curriculaInterface {
    id: String,
    curriculumList: curriculumInterface[],
}

export interface learningNodeInterface {          
    id: String,
    learningNodeName: String,
    learningNodeDescription: String,
    subNode: learningNodeInterface[],
    nextLearningNodeId: String[],
    previousLearningNodeId: String[],
    curricula: curriculaInterface
}