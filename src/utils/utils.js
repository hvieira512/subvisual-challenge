export const getBestMatch = (list, query) => {
    if (list.length > 0) {
        // Check for the exact match
        // If it doesnt, select the first option
        const matchIndex = list.findIndex(item =>
            item.toLowerCase() === query.toLowerCase()
        );
        return matchIndex !== -1 ? list[matchIndex] : list[0];
    }
    return null;
}

export const capitalize = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};
