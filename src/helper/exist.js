import {access} from 'node:fs/promises'

//function to checkout file existence
export default async function exist(path) {
    try {
        await access(path);
        return true;
    } catch (err) {
        return false;
    }
}