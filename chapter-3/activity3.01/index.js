"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booking_1 = require("./booking ");
const flight_1 = require("./flight");
const destinations = (0, flight_1.getDestinations)();
let bamendaBooking = (0, booking_1.startBooking)(destinations[0], 1);
bamendaBooking = (0, booking_1.processPayment)(bamendaBooking);
bamendaBooking = (0, booking_1.completeBooking)(bamendaBooking);
console.log('Booked to Bamenda', bamendaBooking);
console.log('Bamenda flight', destinations[0]);
