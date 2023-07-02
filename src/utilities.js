/**
 * Clamps num to be between min and max, inclusive
 * @param {Number} num 
 * @param {Number} min 
 * @param {Number} max 
 */
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

export function createDateSpanString(startDate, endDate) {
    if (!endDate) {
        return `${startDate} - present`;
    }
    
    if (startDate === endDate) {
        return startDate.toString();
    }

    return `${startDate} - ${endDate}`;
}
