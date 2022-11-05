import TYPES from "../interfaces/inverseType";
import Warrior from '../interfaces/Warrior';
import container from "./DIContainer";

var ninja = container.get<Warrior>(TYPES.Warrior);

export const textt = ninja.fight()

// expect(ninja.fight()).eql("cut!"); // true
// expect(ninja.sneak()).eql("hit!"); // true