import * as process from 'node:process';
import currDirect from '../helper/currDirect';
import err from '../helper/err';

export default async function cd(dirPath) {
    try {
        //change directory to specified directory
        process.chdir(dirPath);
        //display current directory
        currDirect();
    } catch (error){
        //throw error
        err()
    }
}