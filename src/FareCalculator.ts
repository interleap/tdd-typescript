import { CHARGES } from "./constants/Charges"

export type Ride = {
    distance: number;
    duration: number;
}

export const calculateFare = (ride: Ride) => {
    const { distance, duration } = ride;
    return distance * CHARGES.FARE_PER_KM + duration * CHARGES.FARE_PER_MINUTE + CHARGES.BOOKING_CHARGES;
}
