export const wow = () => {
    console.log('wow');
}

export const bubbleSort = <T>(arr: T[], ascending: boolean = true): T[] => {
    // Create a copy of the array to maintain immutability
    const result = [...arr];
    const n = result.length;
    
    // Bubble sort algorithm
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements based on sort direction
            const shouldSwap = ascending 
                ? result[j] > result[j + 1]
                : result[j] < result[j + 1];
                
            if (shouldSwap) {
                // Swap elements using destructuring
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    
    return result;
}
