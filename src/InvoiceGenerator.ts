export class InvoiceGenerator {
    totalFare(distance: number, duration: number): number {
        return distance * 10 + duration * 1 + 5
    }

}