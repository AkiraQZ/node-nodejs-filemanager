import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as process from 'node:process';
import currDirect from '../helper/currDirect';
import err from '../helper/err';

//function to create empty file in current working directory
export default async function add ([fileName]) {
    let fileHand
    try {
        //get absolute path
        const pathToFile = path.resolve(process.cwd(), fileName);
        //create new file
        fileHand = await fs.open(pathToFile, 'w');
        currDirect();
    } catch (error){
        err()
    } finally {
        fileHand?.close()
    }
}
//for push!!!