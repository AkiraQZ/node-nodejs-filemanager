import { dirname } from "node:path";
import fileName from './fileName.js';

// function for get name of directory
export default function directName(url) {
    return dirname(fileName(url));
}