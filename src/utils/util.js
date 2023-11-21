export const CLIENT_ID = "AcCzYVn1GOKyMO6ZhPFdBH1dlueX0NGgzmQd-mlFG9af-0qzRHn3qcncevhFkwyWkI7PzpZBTjhGCer4"


export const extractNumber = (inputString) => {
    const regex = /(\d+)\./; // Match one or more digits followed by a dot
    const match = inputString.match(regex);
    if (match) {
        const extractedValue = match[1];
        return extractedValue
    } else {
        console.log('No match found');
        return 0
    }
}