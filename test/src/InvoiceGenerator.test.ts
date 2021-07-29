import { InvoiceGenerator } from '../../src/InvoiceGenerator'
import { Ride } from '../../src/Ride'

describe("Invoice Generator Test", () => {
    const invoiceGenerator = new InvoiceGenerator()
    it("calculate the total fare for one ride for a given distance", () => {
        const total = invoiceGenerator.fare(10.0, 0.0)
        expect(total).toBe(105.0)
    })

    it("calculate the total fare for a given distance and duration", () => {
        const total = invoiceGenerator.fare(10.0, 7.0)
        expect(total).toBe(112.0)
    })
    it("calculate the total fare given multiple rides", () => {
        const rides = [new Ride(10.0, 7.0), new Ride(3.0, 10.0)]
        const total = invoiceGenerator.totalFare(rides)
        expect(total).toBe(157.0)
    })
})
