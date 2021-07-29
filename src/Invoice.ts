export class Invoice {
    private totalFare: number
    private numberOfRides: number;
    private averageFarePerRide: number;

    constructor(totalFare: number, numberOfRides: number, averageFarePerRide: number) {
        this.totalFare = totalFare
        this.numberOfRides = numberOfRides;
        this.averageFarePerRide = averageFarePerRide;
    }
}
