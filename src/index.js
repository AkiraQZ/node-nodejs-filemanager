//import our custom modules and node modules
import * as os from "node:os";
import * as process from 'node:process';
import { homedir } from "os";


//Enter to home directory
process.chdir(homedir());

//Get name from username=name
const nameParse = Object.fromEntries(
    process.argv.slice(2).map((argument)=> {
        const [key, value] = argument.split('=');
        return [key, value];
    })
)
//Show welcome massage (if username=Null, show noName)
const name = nameParse['--username'] ? nameParse['--username'] : 'noName';
console.log(`Welcome to the File Manager, ${name}!`);

//for push!!!
