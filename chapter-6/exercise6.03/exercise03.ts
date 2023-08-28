type User2 = {
    _id: number;
    email: string;
    token: string;
}
//create admin object
type Admin ={
    accessPages: string[],
    lastLogin: Date
}

//create backupUser
type Backup = {
    lastBackUp: Date,
    backUpLocation: string
}

const superUser: User2 & Admin = {
    _id: 1,
    email: 'rayon.hunte@gmail.com',
    token: '12345',
    accessPages: [
        'profile', 'adminConsole', 'userReset'
    ],
    lastLogin: new Date()
}
type BackUpUser = User2 & Backup;
const backupUser: BackUpUser ={
    _id: 2,
    email: 'rayon.hunte@gmail.com',
    token: '123456',
    lastBackUp: new Date(),
    backUpLocation: '~/backup'
}

console.log(superUser);
console.log(backupUser)