import {
    Flight,
    checkAvailability,
    holdSeats,
    reserveSeats,
    Booking

} from "./flight";


const bookingFactory = (bookingNumber: number) => (
    flight: Flight,
    seatsheld: number
): Booking => ({
    bookingNumber: bookingNumber++,
    flight,
    paid: false,
    seatsHeld: 0,
    seatsReserved: 0
});

const createBooking = bookingFactory(1);


export const startBooking = (
    flight: Flight,
    seatsRequested: number
): Booking => {
    if (checkAvailability(flight, seatsRequested)) {
        holdSeats(flight, seatsRequested);
        return createBooking(flight, seatsRequested);
    }
    throw console.error('Booking not available');

};

export const processPayment = (booking: Booking): Booking => {
    booking.paid = true;
    return booking;
};

export const completeBooking = (booking: Booking): Booking => {
    reserveSeats(booking.flight, booking.seatsHeld);
    booking.seatsReserved = booking.seatsHeld;
    booking.seatsHeld = 0;
    return booking;
};


