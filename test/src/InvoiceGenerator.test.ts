import { InvoiceGenerator } from '../../src/InvoiceGenerator'

describe("Invoice Generator Test", () => {
    it("calculate the total fare for one ride for a given distance", () => {
        const invoiceGenerator = new InvoiceGenerator()
        const total = invoiceGenerator.totalFare(10.0)
        expect(total).toBe(105.0)
    })
})
