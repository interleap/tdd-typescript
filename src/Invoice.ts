import { Ride } from "./Ride";

export class Invoice {
    private rides: Ride[]
    constructor(rides: Ride[]) {
        this.rides = rides
    }
    totalFare = (): number => this.rides.reduce((sum: number, ride: Ride) => sum + ride.fare(), 0)
    numberOfRides = () => this.rides.length
    averageFarePerRide = (): number => this.totalFare() / this.numberOfRides()
}
