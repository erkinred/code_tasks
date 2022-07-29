//1
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    
    return result;
}

//2
function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let b = 0; b < data.length; b++){
        if (typeof data[b] === 'number'){
            data[b] = data[b] * 2;
        }else if(typeof data[b] === 'string'){
            data[b] += ' - done';
        }
    }
    console.log(data);
    return data;
}

//3
function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let c = 0; c < data.length; c++) {
        result[c] = data[data.length-c-1]
    }
    console.log(result);
    return result;
}
