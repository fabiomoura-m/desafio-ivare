export const generateRandomId = (minLength = 6, maxLength = 10) => {
    const min = Math.pow(10, minLength - 1);
    const max = Math.pow(10, maxLength) - 1;

    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;

    const idString = String(randomId).padStart(maxLength, '0');

    return idString;
};
