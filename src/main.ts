import { ErrorMapper } from "utils/ErrorMapper";
import profiler from "screeps-profiler";
import  DungeonMaster  from "DungeonMaster"

declare global {
    /*
        Example types, expand on these or remove them and add your own.
        Note: Values, properties defined here do no fully *exist* by this type definiton alone.
            You must also give them an implemention if you would like to use them. (ex. actually setting a `role` property in a Creeps memory)

        Types added in this `global` block are in an ambient, global context. This is needed because `main.ts` is a module file (uses import or export).
        Interfaces matching on name from @types/screeps will be merged. This is how you can extend the 'built-in' interfaces from @types/screeps.
    */
    // Memory extension samples
    interface Memory {
        uuid: number;
        log: any;
        squads: {
            [squadId: string]: SquadMemory
        };
    }

    interface SquadMemory {
        id: string;
        members: string[];
    }

    interface CreepMemory {
        role: string;
        room: string;
        working: boolean;
    }

    // Syntax for adding proprties to `global` (ex "global.log")
    namespace NodeJS {
        interface Global {
        log: any;
        }
    }
}

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
profiler.enable();
export const loop = ErrorMapper.wrapLoop(() => {
   profiler.wrap(function() {
        const dm = new DungeonMaster();
        dm.run_session();
    });
});
