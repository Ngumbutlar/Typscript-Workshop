import {
    getDestinations,
    checkAvailability,
    holdSeats,
    reserveSeats, 
    Flight
    
} from "../activity3.01/flight"

describe("test suit for `flights`", () =>{
    test('get destinations', () =>{
        const destinations = getDestinations()
        expect(destinations).toHaveLength(7);
    });

    test('checkAvailability', () =>{
        const destinations = getDestinations();
        expect(checkAvailability(destinations[0], 3)).toBeTruthy();
        expect(checkAvailability(destinations[2], 300)).toBeFalsy();
        expect(checkAvailability(destinations[7], 6)).toBeTruthy();
    });

    test('hold seats', () =>{
        expect.assertions(2);
        const flight: Flight = holdSeats(flight, 3);
        expect(flight.seatsHeld).toBe(3);
        try{
            holdSeats(flight, 15);
        }catch (e){
            expect(e.message).toBe('Not enough seats remaining');
        }
    });

    test('reserve seats', () => {
        expect.assertions(2);
           const flight: Flight = reserveSeats(flight, 3);
           expect(flight.seatsRemaining).toBe(27);
        try {
             reserveSeats(flight, 1);
        } catch (e) {
        expect(e.message).toBe('Seats were not held!');
        }
        });
})