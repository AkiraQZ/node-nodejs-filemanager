import {stat} from 'node:fs/promises';
import {resolve} from 'node:path';

// function checkout file existence
export default async function isFile(path) {
    try {
        const resolvedPath = resolve(path);
        const stats = await stat(resolvedPath);
        return stats.isFile()
    } catch (err) {
        return false
    }
}
//for push!!!