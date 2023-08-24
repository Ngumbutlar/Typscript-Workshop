"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeBooking = exports.processPayment = exports.startBooking = void 0;
const flight_1 = require("./flight");
const bookingFactory = (bookingNumber) => (flight, seatsheld) => ({
    bookingNumber: bookingNumber++,
    flight,
    paid: false,
    seatsHeld: 0,
    seatsReserved: 0
});
const createBooking = bookingFactory(1);
const startBooking = (flight, seatsRequested) => {
    if ((0, flight_1.checkAvailability)(flight, seatsRequested)) {
        (0, flight_1.holdSeats)(flight, seatsRequested);
        return createBooking(flight, seatsRequested);
    }
    throw console.error('Booking not available');
};
exports.startBooking = startBooking;
const processPayment = (booking) => {
    booking.paid = true;
    return booking;
};
exports.processPayment = processPayment;
const completeBooking = (booking) => {
    (0, flight_1.reserveSeats)(booking.flight, booking.seatsHeld);
    booking.seatsReserved = booking.seatsHeld;
    booking.seatsHeld = 0;
    return booking;
};
exports.completeBooking = completeBooking;
