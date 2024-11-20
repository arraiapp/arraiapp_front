import { Register } from "../register/register-interface"
import { Ticket } from "./ticket"

export interface Checkout {
    customer: Register | null,
    tickets : Ticket[];
}

export type Checkouts = Checkout
