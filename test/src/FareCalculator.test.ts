import { calculateFare, Ride } from '../../src/FareCalculator'

describe("Ride Test", () => {
    it("calculate the total fare for one ride for a given distance", () => {
        const rideDetails = { distance: 10.0, duration: 0.0 }
        expect(calculateFare(rideDetails)).toBe(105.0)
    })

    it("calculate the total fare for a given distance and duration", () => {
        const rideDetails = { distance: 10.0, duration: 7.0 }
        expect(calculateFare(rideDetails)).toBe(112.0)
    })
})