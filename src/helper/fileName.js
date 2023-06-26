import { fileURLToPath } from "node:url";

// function to get relative path
export default function fileName(url) {
    return fileURLToPath(url);
}
//for push!!!