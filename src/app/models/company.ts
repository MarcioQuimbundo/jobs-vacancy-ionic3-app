import { Address } from "./address";

export class Company {

    constructor(public id?: number,
        public company?: string,
        public logo?: string,
        public address: Address = new Address(),
        public email?: string,
        public secret?: string){
    }
}