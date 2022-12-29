import { Container } from "inversify";

import AuthService from "../service/services_user/auth_service";
import TYPES from "../interfaces/TendonType";
import SignService from "./services_user/sign_service";
import NodeService from "./services_node/node_services";
import LessonService from "./services_lesson.ts/lesson_services";

var container = new Container();
container.bind<AuthService>(TYPES.AuthService).to(AuthService)
container.bind<SignService>(TYPES.SignService).to(SignService)
container.bind<NodeService>(TYPES.NodeService).to(NodeService)
container.bind<LessonService>(TYPES.LessonService).to(LessonService)

export default container;