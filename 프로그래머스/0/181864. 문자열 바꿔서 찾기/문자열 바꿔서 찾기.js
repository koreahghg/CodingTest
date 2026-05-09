function solution(myString, pat) {
    let changed = "";
    
    for (let char of myString) {
        changed += char === "A" ? "B" : "A";
    }
    
    return changed.includes(pat) ? 1 : 0;
}