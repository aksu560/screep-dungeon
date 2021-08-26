import RoomMaster from "RoomMaster";

export default class DungeonMaster {
    sessionNumber: number;
    roomMaster: RoomMaster;

    constructor() {
        this.sessionNumber = Game.time;
        this.roomMaster = new RoomMaster();
    };

    public run_session(): void {
        console.log("DungeonMaster: Session " + this.sessionNumber + " started.");
        this.roomMaster.run();
    }
}
