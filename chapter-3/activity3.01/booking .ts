import { Flight } from "./flight";


const bookingFactory = (bookingNumber: number) =>(
    flight: Flight,
    seatsheld: number
): Booking => ({
    bookingNumber: bookingNumber++,
    flight,
    paid: true,
    seatsheld,
    seatsReserved: 0
});

const createBooking = bookingFactory(1);
