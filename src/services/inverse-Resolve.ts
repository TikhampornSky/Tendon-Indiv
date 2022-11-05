import TYPES from "../interfaces/inverse-Type";
import Warrior from '../interfaces/inverse-Warrior';
import container from "./inverse-DIContainer";

var ninja = container.get<Warrior>(TYPES.Warrior);

export const textt = ninja.fight()

// expect(ninja.fight()).eql("cut!"); // true
// expect(ninja.sneak()).eql("hit!"); // true