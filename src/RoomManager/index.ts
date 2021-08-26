import RoomMemoryManager from "./RoomMemoryManager"

export default class RoomManager {
    room: Room
    memoryManager: RoomMemoryManager
    constructor(room: Room) {
        this.room = room
        this.memoryManager = new RoomMemoryManager(room)
    }

    run() {

    }
}
