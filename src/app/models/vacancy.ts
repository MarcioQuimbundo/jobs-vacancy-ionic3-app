import { Company } from "./company";

export class Vacancy {
    constructor(public id?: number,
                public office?: string,
                public description?: string,
                public policy?: string,
                public benefits?: string,
                public salary?: string,
                public city?: string,
                public state?: string) {

    }

}