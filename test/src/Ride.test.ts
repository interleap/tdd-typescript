import { Ride } from '../../src/Ride'

describe("Ride Test", () => {
    it("calculate the total fare for one ride for a given distance", () => {
        const total = new Ride(10.0, 0.0).fare()
        expect(total).toBe(105.0)
    })

    it("calculate the total fare for a given distance and duration", () => {
        const total = new Ride(10.0, 7.0).fare()
        expect(total).toBe(112.0)
    })
})