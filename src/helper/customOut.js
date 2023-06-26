import {Writable} from 'node:stream';

//function for output by stream
export function customOut() {
    return new Writable({
        decodeStrings: false, 
        write(chunk, _, callback){
            console.log(chunk);
            callback()
        },
    })
}
//for push!!!