function solution(arr1, arr2) {
    let c1 = 0, c2 = 0;
    if(arr1.length > arr2.length){
        return 1;
    }
    else if(arr1.length < arr2.length){
        return -1;
    }
    else if(arr1.length == arr2.length){
        for(let i = 0; i < arr1.length; i++){
            c1 += arr1[i];
        }
        for(let i = 0; i < arr1.length; i++){
            c2 += arr2[i];
        }
        if(c1 > c2){
            return 1;
        }
        else if(c1 < c2){
            return -1;
        }
    }
    return 0;
}