"use strict";
// Building an interface for a function that will update a user database.
;
let allUsers = [
    { email: 'home@home.com', userId: 1 },
    { email: 'out@side.com', userId: 2 }
];
let addUser;
addUser = function (user) {
    return [
        ...allUsers,
        user
    ];
};
console.log(addUser({ email: 'slow@moo', userId: allUsers.length }));
