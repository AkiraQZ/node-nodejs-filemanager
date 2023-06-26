import * as os from 'node:os';
import * as process from 'node:process';
import currDirect from '../helper/currDirect';
import err from '../helper/err';

export default async function os([command]) {
    try {
    //Checking if the command exists and doing what it should do
    const user = (os.userInfo);
    switch (command) {
        //if we get --EOL command
        case '--EOL':
            console.log(JSON.stringify(os.EOL));
            currDirect();
            break;
        //if we get --homedir command 
        case '--homedir':
            console.log(user.homedir);
            currDirect();

            break
        //if we get --username command
        case '--username':
            console.log(user.username);
            currDirect();
            break
        //if we get --archeticture command
        case '--archeticture':
            console.log(process.arch);
            currDirect();
            break
        //if we get --cpus command
        case '--cpus':
            const cpusInfo = os.cpus().map(({model, speed}) => ({
                model,
                speed: `${speed/1000}GHz`
            }))
            console.table(cpusInfo);
            currDirect();
            break
        //if we get wrong or undifened command
        default:
            console.log('command is undifened');
            currDirect();
    } 
    
} catch (error){
    //throw error
    err()
}
    
}