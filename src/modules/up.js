import * as process from 'node:process';
import currDirect from '../helper/currDirect';
import err from '../helper/err';

export default async function up() {
    try {
        //change directory to upper
        process.chdir('..');
        //display current directory
        currDirect();
    } catch (error) {
        //throw error
        err();
    }
    
}