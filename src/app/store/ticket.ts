export interface Ticket{
    id: number,
    description: string,
    value: number,
    quantity?: number
}

export type Tickets = Ticket