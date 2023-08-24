"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flight_1 = require("../activity3.01/flight");
describe("test suit for `flights`", () => {
    test('get destinations', () => {
        const destinations = (0, flight_1.getDestinations)();
        expect(destinations).toHaveLength(7);
    });
    test('checkAvailability', () => {
        const destinations = (0, flight_1.getDestinations)();
        expect((0, flight_1.checkAvailability)(destinations[0], 3)).toBeTruthy();
        expect((0, flight_1.checkAvailability)(destinations[2], 300)).toBeFalsy();
        expect((0, flight_1.checkAvailability)(destinations[7], 6)).toBeTruthy();
    });
    test('hold seats', () => {
        expect.assertions(2);
        const flight = (0, flight_1.holdSeats)(flight, 3);
        expect(flight.seatsHeld).toBe(3);
        try {
            (0, flight_1.holdSeats)(flight, 15);
        }
        catch (e) {
            expect(e.message).toBe('Not enough seats remaining');
        }
    });
    test('reserve seats', () => {
        expect.assertions(2);
        const flight = (0, flight_1.reserveSeats)(flight, 3);
        expect(flight.seatsRemaining).toBe(27);
        try {
            (0, flight_1.reserveSeats)(flight, 1);
        }
        catch (e) {
            expect(e.message).toBe('Seats were not held!');
        }
    });
});
