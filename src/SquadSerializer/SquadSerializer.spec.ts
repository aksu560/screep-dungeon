import { mockInstanceOf } from "screeps-jest";
import { GenericSquad } from "../Squad/GenericSquad";
import SquadSerializer from "./SquadSerializer";

describe('SquadSerializer', () => {

    let serializer: SquadSerializer;
    let squad: GenericSquad;
    let creep: Creep;
    beforeEach(() => {
        serializer = new SquadSerializer();
        creep = mockInstanceOf<Creep>({name: 'creep'});
        squad = new GenericSquad("Yeet", [creep]);
    });

    describe('#serialize', () => {
        it('should serialize a squad', () => {

            const serialized = serializer.serialize(squad);
            expect(serialized).toEqual({
                id: squad.id,
                type: squad.type,
                members: squad.members,
                classtype: squad.__name__,
            });
        });
    });

    describe('#deserialize', () => {
        it('should deserialize a squad', () => {
            const serialized = serializer.serialize(squad);
            const deserialized = serializer.deserialize(serialized);
            expect(deserialized).toEqual(squad);
        });
    });
});
