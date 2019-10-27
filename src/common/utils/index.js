/**
 * Format string to locale date
 * @param {string} dateString date string.
 * @returns {string} The formatted date.
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}
