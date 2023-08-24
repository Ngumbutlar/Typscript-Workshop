"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booking_1 = require("../activity3.01/booking ");
const flight_1 = require("../activity3.01/flight");
const destinations = (0, flight_1.getDestinations)();
describe('bookings tests', () => {
    test('create a booking', () => {
        const booking = (0, booking_1.startBooking)(destinations[0], 3);
        expect(booking).toEqual({
            bookingNumber: 1,
            flight: destinations[0],
            paid: false,
            seatsHeld: 3,
            seatsReserved: 0,
        });
    });
    test('pay for a booking', () => {
        let booking = (0, booking_1.startBooking)(destinations[0], 3);
        booking = (0, booking_1.processPayment)(booking);
        expect(booking.paid).toBe(true);
    });
    test('complete a booking', () => {
        let booking = (0, booking_1.startBooking)(destinations[0], 3);
        booking = (0, booking_1.processPayment)(booking);
        booking = (0, booking_1.completeBooking)(booking);
        expect(booking.paid).toBe(true);
        expect(booking.seatsReserved).toBe(3);
    });
});
describe('error scenarios', () => {
    test('booking must have availability', () => {
        expect.assertions(1);
        try {
            (0, booking_1.startBooking)(destinations[6], 8);
        }
        catch (e) {
            expect(e.message).toBe('Booking not available!');
        }
    });
});
