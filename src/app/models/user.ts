import { Timestamp } from "rxjs";

export interface User {
    id?: string;
    name?: string;
    email?: string;
    role?: string;
    status?: string;
    // creationDate: Timestamp;
}