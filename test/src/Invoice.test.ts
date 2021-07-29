import { Invoice } from '../../src/Invoice'
import { Ride } from '../../src/Ride'

describe("Invoice Generator Test", () => {
    const rides = [new Ride(10.0, 7.0), new Ride(3.0, 10.0)]
    const invoice = new Invoice(rides)

    it("generate the total fare for both rides", () => {
        expect(invoice.totalFare()).toBe(157.0)
    })

    it("calculate the number of rides", () => {
        expect(invoice.numberOfRides()).toBe(2)
    })

    it("calculate the average fare per ride", () => {
        expect(invoice.averageFarePerRide()).toBe(78.5)
    })
})
