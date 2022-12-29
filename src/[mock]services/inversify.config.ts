import { Container } from "inversify";
import TYPES from "../interfaces/inverse-Type";
import { Ninja, Katana, Shuriken } from "./inverse-Class";
import Warrior from '../interfaces/inverse-Warrior';
import Weapon from '../interfaces/inverse-Weapon';
import ThrowableWeapon from '../[mock]Interface/inverse-ThrowableWeapon'

import GetService from "./GetService";
import PostService from "./PostService";
import UpdateService from "./UpdateService";
import DeleteService from "./DeleteService";

var container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

container.bind<GetService>(TYPES.GetService).to(GetService);
container.bind<PostService>(TYPES.PostService).to(PostService);
container.bind<UpdateService>(TYPES.UpdateService).to(UpdateService);
container.bind<DeleteService>(TYPES.DeleteService).to(DeleteService);

export default container;