function solution(num_list) {
    let nanugi = 0;
    for(let i = 0; i<num_list.length; i++){
        while(num_list[i] != 1){
            if(num_list[i] % 2 == 0){
                num_list[i] = num_list[i] / 2;
                nanugi++;
            }
            else{
                num_list[i] = num_list[i] - 1;
                num_list[i] = num_list[i] / 2;
                nanugi++;
            }
        }
    }
    return nanugi;
}