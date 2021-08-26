import RoomManager from "RoomManager";
import { mockInstanceOf } from "screeps-jest";
import RoomMemoryManager from "./RoomMemoryManager";

describe("RoomManager", () => {
    let emptyRoom: Room;
    beforeEach(() => {
        emptyRoom = mockInstanceOf<Room>({name: "W8N4"});
    });
    describe("#constructor", () => {
        it("should create a RoomMemoryManager object, and assign it to the memoryManager property", () => {
            const roomManager = new RoomManager(emptyRoom);
            expect(roomManager.memoryManager).toBeInstanceOf(RoomMemoryManager);
        });
    });
});
