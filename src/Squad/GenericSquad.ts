import { AbstractSquad } from "Squad";

export class GenericSquad extends AbstractSquad{
    id: string;
    type: string;
    members: Array<string>;
    __name__ = "GenericSquad";

    constructor(id: string, members: Array<Creep>) {
        super();
        this.type = "GENERIC";
        this.id = `${this.type}-${id}`;
        this.members = []
        for (const creep in members) {
            this.members.push(members[creep].name);
        }
    }

    get memory(): SquadMemory{
        const memory = Memory.squads[this.id];
        if(memory === undefined){
            return this.initialize_memory();
        }
        return memory;
    }

    set memory(value: SquadMemory){
        Memory.squads[this.id] = value;
    }

    run() {
        for (const creepName in this.members) {
            const creep = Game.creeps[creepName];
            if (!creep) {
                // TODO: Remove creep memory.
                continue;
            }
        }
    }

    initialize_memory(): SquadMemory{
        this.memory = {
            id: this.id,
            members: this.members,
        }
        Memory.squads[this.id] = this.memory;
        return this.memory;
    }

    add_member(member: string){
        this.members.push(member);
    }

    remove_member(member: string){
        this.members.splice(this.members.indexOf(member), 1);
    }
}
