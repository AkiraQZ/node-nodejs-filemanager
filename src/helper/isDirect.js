import {stat} from 'node:fs/promises';
import {resolve} from 'node:path';

// function checkout directory existence
export default async function isDirect(path) {
    try {
        const resolvedPath = resolve(path);
        const stats = await stat(resolvedPath);
        return stats.isDirectory();
    } catch (err) {
        return false;
    }
}
//for push!!!