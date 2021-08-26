import { mockGlobal, mockInstanceOf } from "screeps-jest";
import RoomMemoryManager from "./RoomMemoryManager";

describe("RoomMemoryManager", () => {
    let emptyRoomMemoryManager: RoomMemoryManager;

    beforeEach(() => {
        emptyRoomMemoryManager = new RoomMemoryManager(mockInstanceOf<Room>({name: "W8N4"}));
        mockGlobal<Memory>("Memory", {
            rooms: {
                W8N4: {}
            },
        });
    });

    describe('memory', () => {
        it('should set the room memory to default and return it, if the room has no memory when accessed', () => {
            const memory = emptyRoomMemoryManager.memory;
            const default_memory = emptyRoomMemoryManager.get_default_room_memory();
            expect(memory).toEqual(default_memory);
        });
        it('should return the room memory, if the room has memory', () => {
            Memory.rooms.W8N4 = emptyRoomMemoryManager.get_default_room_memory();
            const memory = emptyRoomMemoryManager.memory;
            expect(memory).toEqual(Memory.rooms.W8N4);
        });
        it('should set the room memory when assigned', () => {
            const test_memory = {name: "W8N4"};
            emptyRoomMemoryManager.memory = test_memory;
            expect(test_memory).toEqual(Memory.rooms.W8N4);
        });
    });

    describe('#delete_room_memory', () => {
        it('should delete the room memory', () => {
            emptyRoomMemoryManager.memory;
            expect(emptyRoomMemoryManager.memory).toBeDefined();
            emptyRoomMemoryManager.delete_room_memory();
            // jest doesnt like accessing undefined properties, so we gotta hack a little bit.
            const memory_keys = Object.keys(Memory.rooms);
            expect(memory_keys.length).toBe(0);
        });
    });

    describe('#get_default_room_memory', () => {
        it('should return the default room memory', () => {
            const memory = emptyRoomMemoryManager.memory;
            expect(memory).toEqual(emptyRoomMemoryManager.defaultRoomMemory);
        });
    });
});
