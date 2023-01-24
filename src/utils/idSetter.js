export function setId() {
    const dateFactor = Date.now().toString(36);
    const randomFactor = Math.random().toString(36).substr(2);

    return dateFactor + randomFactor;
};