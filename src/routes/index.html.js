import data from "../data.js";
import multiPostPage from "../templates/multiPostPage.js";

/**
 * Generate the index page.
 */
export default async () => {
  return multiPostPage(data);
};
