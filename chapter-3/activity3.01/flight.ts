
export interface Flight {
    destination: string;
    flightNumber: number;
    seatsHeld: number;
    seatsRemaining: number;
    time: string;
}

export interface Booking {
    bookingNumber: number;
    flight: Flight;
    paid: boolean;
    seatsHeld: number;
    seatsReserved: number;

}

const flight: Flight[] = [
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

export const getDestinations = (): Flight[] => flight;


export const checkAvailability = (flight: Flight, seatsRequested: number): boolean => {
    if ((flight.seatsRemaining - flight.seatsHeld) >= seatsRequested) {
        return true;
    }
    return false;
};

export const holdSeats = (flight: Flight, seatsRequested: number): Flight => {
    if (flight.seatsRemaining - flight.seatsHeld < seatsRequested) {
        throw console.error('No Seats held at the moment');
    }
    flight.seatsHeld += seatsRequested;
    flight.seatsRemaining -= seatsRequested;
    return flight;
}

export const reserveSeats = (flight: Flight, seatsRequested: number): Flight => {
    if (flight.seatsHeld < seatsRequested) {
        throw console.error('There was an error while reserving seat');
    }
    flight.seatsHeld -= seatsRequested;
    flight.seatsRemaining -= seatsRequested;
    return flight;
}







