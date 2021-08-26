import { mockGlobal, mockInstanceOf } from 'screeps-jest';
import DungeonMaster from 'DungeonMaster';
import { expect } from '@jest/globals';

jest.mock('RoomMaster');

describe('DungeonMaster', () => {

    describe('#constructor', () => {
        it('should create a new DungeonMaster instance', () => {
            mockGlobal<Game>('Game', {
                time: 123
            });
            const instance = new DungeonMaster();
            expect(instance).toBeInstanceOf(DungeonMaster);
        });
    });

    it('should have an attribute "sessionNumber" where the value is current tick', () => {
        mockGlobal<Game>('Game', {
            time: 123
        });
        const instance = new DungeonMaster();
        expect(instance.sessionNumber).toBe(123);
    });
});
