import { calculateFare, Ride } from "./FareCalculator";

export const generateInvoiceDetails = (rides: Ride[]) => {
    const totalFare = (): number => rides.reduce((sum: number, ride: Ride) => sum + calculateFare(ride), 0)
    const numberOfRides = () => rides.length
    const averageFarePerRide = (): number => totalFare() / numberOfRides()
    return ({
        totalFare,
        numberOfRides,
        averageFarePerRide
    })
}
