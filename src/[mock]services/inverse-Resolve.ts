import TYPES from "../[mock]Interface/inverse-Type";
import Warrior from "../[mock]Interface/inverse-Warrior";
import container from "./inversify.config";

var ninja = container.get<Warrior>(TYPES.Warrior);

export const textt = ninja.fight()