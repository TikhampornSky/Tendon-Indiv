import { Container } from "inversify";

import AuthService from "../service/services_user/auth_service";
import TYPES from "../interfaces/TendonType";
import SignService from "./services_user/sign_service";

var container = new Container();
container.bind<AuthService>(TYPES.AuthService).to(AuthService)
container.bind<SignService>(TYPES.SignService).to(SignService)

export default container;