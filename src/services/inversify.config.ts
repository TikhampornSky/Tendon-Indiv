import { Container } from "inversify";

import AuthService from "./user_service";
import TYPES from "../interfaces/TendonType";
import SignService from "./sign_service";
import NodeService from "./node_services";
import LessonService from "./lesson_services";
import CourseService from "./course_services";

var container = new Container();
container.bind<AuthService>(TYPES.AuthService).to(AuthService)
container.bind<SignService>(TYPES.SignService).to(SignService)
container.bind<NodeService>(TYPES.NodeService).to(NodeService)
container.bind<LessonService>(TYPES.LessonService).to(LessonService)
container.bind<CourseService>(TYPES.CourseService).to(CourseService)

export default container;