import * as fs from 'node:fs';
import * as path from 'path'; 
import { pipeline } from 'node:stream';
import currDirect from '../helper/currDirect';
import err from '../helper/err';
import { customOut } from '../helper/customOut';

//function to read file and print it's content in console
export default async function cat([fileName]){
    try {
    // get absolute path
    const fileNameResolved = path.resolve(fileName);
    // create readble stream
    const stream = fs.createReadStream(fileNameResolved, {encoding:'utf-8'});
    // show result by means of customOut(create writeble stream to log content of file by chunks)
    await pipeline(stream, customOut());
    // log current directory
    currDirect();
} catch (error) {
    // console.error ('operation failed')
    err()
}

}