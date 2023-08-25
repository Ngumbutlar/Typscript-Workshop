// Building an interface for a function that will update a user database.

type User = {
    email: string,
    userId: number
};

interface SuperAddMe{
    (user: User) : User[]
};

let allUsers: User[] = [
    {email: 'home@home.com', userId: 1 },
    {email: 'out@side.com', userId: 2 }
];

let addUser: SuperAddMe

addUser = function(user: User): User[]{
    return [
        ...allUsers,
        user
    ]
}


console.log(
    addUser(
        {email: 'slow@moo', userId: allUsers.length}
    )
);