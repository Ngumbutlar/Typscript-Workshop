"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservedSeats = exports.holdSeats = exports.checkAvailability = exports.getDestination = void 0;
const flights = [
    {
        destination: 'Bamenda',
        flightNumber: 1,
        seatsHeld: 10,
        seatsRemaining: 20,
        time: '10:15'
    },
    {
        destination: 'Los Angelas',
        flightNumber: 2,
        seatsHeld: 5,
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
const getDestination = (flights) => {
    return flights;
};
exports.getDestination = getDestination;
const checkAvailability = (flights, seatsRequested) => {
    if ((flights.seatsRemaining - flights.seatsHeld) >= seatsRequested) {
        return true;
    }
    return false;
};
exports.checkAvailability = checkAvailability;
const holdSeats = (flights, seatsRequested) => {
    if ((flights.seatsRemaining - flights.seatsHeld) < seatsRequested) {
        throw console.error('No Seats held at the moment');
    }
    flights.seatsHeld += seatsRequested;
    return flights;
};
exports.holdSeats = holdSeats;
const reservedSeats = (flights, seatsRequested) => {
    if (flights.seatsHeld < seatsRequested) {
        throw console.error('There was an error while reserving seat');
    }
    flights.seatsHeld -= seatsRequested;
    flights.seatsRemaining -= seatsRequested;
    return flights;
};
exports.reservedSeats = reservedSeats;
