import { InvoiceGenerator } from '../../src/InvoiceGenerator'
import { Ride } from '../../src/Ride'

describe("Invoice Generator Test", () => {
    const invoiceGenerator = new InvoiceGenerator()
    it("calculate the total fare given multiple rides", () => {
        const rides = [new Ride(10.0, 7.0), new Ride(3.0, 10.0)]
        const total = invoiceGenerator.totalFare(rides)
        expect(total).toBe(157.0)
    })
})
