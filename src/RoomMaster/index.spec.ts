import RoomMaster from "RoomMaster";
import { mockGlobal } from "screeps-jest";

describe("RoomMaster", () => {

    mockGlobal<Game>("Game", {
        rooms: {
            "room-1": {
                name: "room-1",
            },
            "room-2": {
                name: "room-2",
            }
        }
    });
    let roomMaster: RoomMaster;

    beforeEach(() => {
        roomMaster = new RoomMaster();
    });

    describe("#constructor", () => {
        it("should create a roomManagers property with a RoomManager for each room.", () => {
            expect(Object.keys(roomMaster.roomManagers).length).toBe(Object.keys(Game.rooms).length);
        });
    });

    describe("#run", () => {
        it("should call the run method of each RoomManager.", () => {
            Object.keys(roomMaster.roomManagers).forEach(key => {
                spyOn(roomMaster.roomManagers[key], "run");
            });
            roomMaster.run();
            Object.keys(roomMaster.roomManagers).forEach(key => {
                expect(roomMaster.roomManagers[key].run).toHaveBeenCalled();
            });
        });
    });
});
