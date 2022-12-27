import { Container } from "inversify";

import AuthService from "../service/services_user/auth_service";
import TYPES from "../interfaces/TendonType";

var container = new Container();
container.bind<AuthService>(TYPES.AuthService).to(AuthService);

export default container;