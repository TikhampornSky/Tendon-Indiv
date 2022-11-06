import TYPES from "../interfaces/inverse-Type";
import Warrior from '../interfaces/inverse-Warrior';
import container from "./DIContainer";

var ninja = container.get<Warrior>(TYPES.Warrior);

export const textt = ninja.fight()