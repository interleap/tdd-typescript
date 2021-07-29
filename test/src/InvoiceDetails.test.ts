import { generateInvoiceDetails } from '../../src/InvoiceDetails'

describe("Invoice Generator Test", () => {
    const rides = [{ distance: 10.0, duration: 7.0 }, { distance: 3.0, duration: 10.0 }]
    const invoiceDetails = generateInvoiceDetails(rides)

    it("generate the total fare for both rides", () => {
        expect(invoiceDetails.totalFare()).toBe(157.0)
    })

    it("calculate the number of rides", () => {
        expect(invoiceDetails.numberOfRides()).toBe(2)
    })

    it("calculate the average fare per ride", () => {
        expect(invoiceDetails.averageFarePerRide()).toBe(78.5)
    })
})
