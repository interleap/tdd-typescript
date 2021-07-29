import { Ride } from "./Ride";

export class InvoiceGenerator {
    totalFare(rides: Array<Ride>): number {
        return rides.reduce((sum: number, ride: Ride) => sum + ride.fare(), 0)
    }
}