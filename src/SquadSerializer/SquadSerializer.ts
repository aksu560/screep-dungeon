import * as squadspace from "Squad";

interface SerializedSquad {
    type: string;
    id: string;
    members: string[];
    classtype: string;
}

export default class SquadSerializer {
    serialize(squad: squadspace.AbstractSquad) {
        let output: SerializedSquad = {
            type: squad.type,
            id: squad.id,
            members: squad.members,
            classtype: squad.__name__,
        };
        return output;
    }

    deserialize(squad: SerializedSquad): squadspace.AbstractSquad {
        // Instantiate the squad class
        const dirty_obj: squadspace.AbstractSquad = new (<any>squadspace)[squad.classtype]("", []);
        dirty_obj.id = squad.id;
        dirty_obj.members = squad.members;
        return dirty_obj;
    }
}
