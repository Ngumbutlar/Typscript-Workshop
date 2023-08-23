
export interface Flight {
    destination: string;
    flightNumber: number;
    seatsHeld: number;
    seatsRemaining: number;
    time: string;
}

const flights: Flight[] = [
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

export const getDestination = (flights: Flight) => {
    return flights
}

export const checkAvailability = (flights: Flight, seatsRequested: number): boolean => {
    if ((flights.seatsRemaining - flights.seatsHeld) >= seatsRequested) {
        return true;
    }
    return false;
};

export const holdSeats = (flights: Flight, seatsRequested: number): Flight => {
    if ((flights.seatsRemaining - flights.seatsHeld) < seatsRequested) {
        throw console.error('No Seats held at the moment');
    }
    flights.seatsHeld += seatsRequested;
    return flights;
}

export const reservedSeats = (flights: Flight, seatsRequested: number): Flight => {
    if (flights.seatsHeld < seatsRequested) {
        throw console.error('There was an error while reserving seat');
    }
    flights.seatsHeld -= seatsRequested;
    flights.seatsRemaining -= seatsRequested;
    return flights;
}







