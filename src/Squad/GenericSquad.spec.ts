import { mockGlobal } from "screeps-jest";
import { GenericSquad } from "./GenericSquad";

describe('GenericSquad', () => {

    let squad: GenericSquad;

    beforeEach(() => {
        squad = new GenericSquad("foo", []);
        mockGlobal<Memory>('Memory', {
            squads: {
                "GENERIC-foo": undefined
            }
        });
    });

    describe('#memory', () => {
        it('should return Memory', () => {
            expect(squad.memory).toBeDefined();
        });
        it('should set correctly', () => {
            const test_memory = {
                id: "foo",
                members: ["bar"]
            };
            squad.memory = test_memory;
            expect(squad.memory).toEqual(test_memory);
        });
    });

    describe('#add_member', () => {
        it('should add member', () => {
            squad.add_member("bar");
            expect(squad.members).toEqual(["bar"]);
        });
    });

    describe('#remove_member', () => {
        it('should remove member', () => {
            squad.add_member("bar");
            expect(squad.members).toEqual(["bar"]);
            squad.remove_member("bar");
            expect(squad.members).toEqual([]);
        });
    });
});
