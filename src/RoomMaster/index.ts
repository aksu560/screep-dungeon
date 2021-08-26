import RoomManager from "RoomManager";

export default class RoomMaster {

    roomManagers: {[roomName: string]: RoomManager};

    constructor() {
        this.roomManagers = {};
        for (const room in Game.rooms) {
            this.roomManagers[room] = new RoomManager(Game.rooms[room]);
        }
    }

    run(): RoomManager[] {
        let ran_managers = [];
        for (const room in this.roomManagers) {
            this.roomManagers[room].run();
            ran_managers.push(this.roomManagers[room]);
        }
        return ran_managers;
    }
}
