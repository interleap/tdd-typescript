export class Ride {
    public static FARE_PER_KM: number = 10;
    public static FARE_PER_MINUTE: number = 1;
    public static BOOKING_CHARGES: number = 5;

    constructor(distance: number, duration: number) {
        this.distance = distance;
        this.duration = duration;
    }

    private distance: number;
    private duration: number;

    fare(): number {
        return this.distance * Ride.FARE_PER_KM + this.duration * Ride.FARE_PER_MINUTE + Ride.BOOKING_CHARGES
    }
}
