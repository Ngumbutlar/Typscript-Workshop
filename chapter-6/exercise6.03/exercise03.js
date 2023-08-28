"use strict";
const superUser = {
    _id: 1,
    email: 'rayon.hunte@gmail.com',
    token: '12345',
    accessPages: [
        'profile', 'adminConsole', 'userReset'
    ],
    lastLogin: new Date()
};
const backupUser = {
    _id: 2,
    email: 'rayon.hunte@gmail.com',
    token: '123456',
    lastBackUp: new Date(),
    backUpLocation: '~/backup'
};
console.log(superUser);
console.log(backupUser);
