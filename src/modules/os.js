import * as os from 'node:os';
import * as process from 'node:process';
import currDirect from '../helper/currDirect';

export default async function os([command]) {
    try {
    //Checking if the command exists and doing what it should do
    const user = (os.userInfo);
    switch (command) {
        case '--EOL':
            console.log(JSON.stringify(os.EOL));
            break;
        case '--homedir':
            console.log(user.homedir);;
            break
        case '--username':
            console.log(user.username);
            break
        case '--archeticture':
            console.log(process.arch);
            break
        default:
            console.log();
    } 
    
}
    
}