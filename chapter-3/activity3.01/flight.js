"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserveSeats = exports.holdSeats = exports.checkAvailability = exports.getDestinations = void 0;
const flight = [
    {
        destination: 'Bamenda',
        flightNumber: 1,
        seatsHeld: 0,
        seatsRemaining: 20,
        time: '10:15'
    },
    {
        destination: 'Los Angelas',
        flightNumber: 2,
        seatsHeld: 0,
        seatsRemaining: 60,
        time: '15:30'
    },
    {
        destination: 'New York',
        flightNumber: 3,
        seatsHeld: 0,
        seatsRemaining: 30,
        time: '3:00'
    },
    {
        destination: 'California',
        flightNumber: 4,
        seatsHeld: 0,
        seatsRemaining: 20,
        time: '15:35'
    },
    {
        destination: 'Lagos',
        flightNumber: 5,
        seatsHeld: 0,
        seatsRemaining: 10,
        time: '14:00'
    },
    {
        destination: 'Douala',
        flightNumber: 6,
        seatsHeld: 5,
        seatsRemaining: 30,
        time: '7:00'
    }
];
const getDestinations = () => flight;
exports.getDestinations = getDestinations;
const checkAvailability = (flight, seatsRequested) => {
    if ((flight.seatsRemaining - flight.seatsHeld) >= seatsRequested) {
        return true;
    }
    return false;
};
exports.checkAvailability = checkAvailability;
const holdSeats = (flight, seatsRequested) => {
    if (flight.seatsRemaining - flight.seatsHeld < seatsRequested) {
        throw console.error('No Seats held at the moment');
    }
    flight.seatsHeld += seatsRequested;
    flight.seatsRemaining -= seatsRequested;
    return flight;
};
exports.holdSeats = holdSeats;
const reserveSeats = (flight, seatsRequested) => {
    if (flight.seatsHeld < seatsRequested) {
        throw console.error('There was an error while reserving seat');
    }
    flight.seatsHeld -= seatsRequested;
    flight.seatsRemaining -= seatsRequested;
    return flight;
};
exports.reserveSeats = reserveSeats;
