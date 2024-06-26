import { FileTree } from "@weborigami/async-tree";
import { fileURLToPath } from "node:url";

const markdownPath = fileURLToPath(new URL("../markdown", import.meta.url));

// Export the collection of posts as a tree of Buffers.
export default new FileTree(markdownPath);
