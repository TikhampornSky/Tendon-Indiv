import { Container } from "inversify";
import TYPES from "../interfaces/inverseType";
import { Ninja, Katana, Shuriken } from "./inverseClass";
import Warrior from '../interfaces/Warrior';
import Weapon from '../interfaces/Weapon';
import ThrowableWeapon from '../interfaces/ThrowableWeapon'

var container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export default container;