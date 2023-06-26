
import {cwd} from 'node:process';

//function show current directory
export default function currDirect() {
    console.log(`You are currently in ${cwd()}`);
}
//for push!!!