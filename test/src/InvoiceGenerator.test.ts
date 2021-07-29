import { Invoice } from '../../src/Invoice'
import { InvoiceGenerator } from '../../src/InvoiceGenerator'
import { Ride } from '../../src/Ride'

describe("Invoice Generator Test", () => {
    const invoiceGenerator = new InvoiceGenerator()
    it("calculate the total fare given multiple rides", () => {
        const rides = [new Ride(10.0, 7.0), new Ride(3.0, 10.0)]
        const invoice = invoiceGenerator.generate(rides)
        const expectedInvoice = new Invoice(157.0, 2, 78.5)
        expect(invoice).toStrictEqual(expectedInvoice)
    })
})
