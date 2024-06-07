import { FileTree } from "@weborigami/async-tree";
import { fileURLToPath } from "node:url";

export default new FileTree(
  fileURLToPath(new URL("../../images", import.meta.url))
);