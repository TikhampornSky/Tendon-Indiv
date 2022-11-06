import { Container } from "inversify";
import TYPES from "../interfaces/inverse-Type";
import { Ninja, Katana, Shuriken } from "./inverse-Class";
import Warrior from '../interfaces/inverse-Warrior';
import Weapon from '../interfaces/inverse-Weapon';
import ThrowableWeapon from '../interfaces/inverse-ThrowableWeapon'
import Post from "../interfaces/Post";
import GetService from "./GetService";

var container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

// container.bind(A).to(B)

export default container;