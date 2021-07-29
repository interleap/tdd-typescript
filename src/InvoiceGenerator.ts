import { Ride } from "./Ride";

export class InvoiceGenerator {
    public static FARE_PER_KM: number = 10;
    public static FARE_PER_MINUTE: number = 1;
    public static BOOKING_CHARGES: number = 5;

    fare(distance: number, duration: number): number {
        return distance * InvoiceGenerator.FARE_PER_KM + duration * InvoiceGenerator.FARE_PER_MINUTE + InvoiceGenerator.BOOKING_CHARGES
    }

    totalFare(rides: Array<Ride>): number {
        return rides.reduce((sum: number, ride: Ride) => sum + this.fare(ride.distance, ride.duration), 0)
    }
}