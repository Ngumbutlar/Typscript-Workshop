"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookingFactory = (bookingNumber) => (flight, seatsheld) => ({
    bookingNumber: bookingNumber++,
    flight,
    paid: true,
    seatsheld,
    seatsReserved: 0
});
const createBooking = bookingFactory(1);
