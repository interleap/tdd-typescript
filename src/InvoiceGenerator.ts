import { Invoice } from "./Invoice";
import { Ride } from "./Ride";

export class InvoiceGenerator {
    totalFare(rides: Array<Ride>): Invoice {
        const totalFare = rides.reduce((sum: number, ride: Ride) => sum + ride.fare(), 0)
        const numberOfRides = rides.length
        const averageFarePerRide = totalFare / numberOfRides
        return new Invoice(totalFare, numberOfRides, averageFarePerRide)
    }
}