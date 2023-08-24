import { completeBooking, processPayment, startBooking } from "./booking ";
import { getDestinations } from "./flight";

const destinations = getDestinations();

let bamendaBooking = startBooking(destinations[0], 1);
bamendaBooking = processPayment(bamendaBooking);
bamendaBooking = completeBooking(bamendaBooking);


console.log('Booked to Bamenda', bamendaBooking)
console.log('Bamenda flight', destinations[0]);

