interface RoomMemory {
    name: string;
}

function isRoomMemory(target: any): target is RoomMemory {
    return 'name' in target;
}

export default class RoomMemoryManager {
    room: Room;
    defaultRoomMemory: RoomMemory;

    constructor(room: Room) {
        this.room = room;
        this.defaultRoomMemory = {
            name: this.room.name,
        };
    }

    get memory(): RoomMemory {
        const dirty_memory = Memory.rooms[this.room.name];
        if (isRoomMemory(dirty_memory)) {
            return dirty_memory;
        }
        const default_memory = this.get_default_room_memory();
        this.memory = default_memory;
        return default_memory;
    }

    set memory(memory: RoomMemory) {
        Memory.rooms[this.room.name] = memory;
    }

    delete_room_memory(): void {
        delete Memory.rooms[this.room.name];
    }

    get_default_room_memory(): RoomMemory {
        return this.defaultRoomMemory;
    }
}
