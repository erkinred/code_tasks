//1
function firstTask() {
    for (let i = 5; i <= 10; i++){
        console.log(i);
    }
}

//2
function secondTask() {
    for (let j = 20; j >= 10; j--){
        if (j === 13){
            break;
        }
        console.log(j);
    }
}

//3
function thirdTask() {
    // Пишем решение вот тут
    for (let k = 2; k <= 10; k++){
        if (k % 2 === 1){
            continue;
        }else{
           console.log(k); 
        }
    }
}
