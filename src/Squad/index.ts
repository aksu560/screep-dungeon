export abstract class AbstractSquad {
    abstract __name__: string;
    abstract id: string;
    abstract members: Array<string>;
    abstract type: string;
    abstract run(): void;
}
export { GenericSquad } from "./GenericSquad";
