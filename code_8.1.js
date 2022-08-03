//1
function getTimeFromMinutes(time) {
    if(!Number.isInteger(time) || time < 0) {
        return 'Ошибка, проверьте данные';
    }
    
    let timer = Math.floor(time / 60);
    
    let result = '';
    
    switch(timer) {
        case 0:
            result = `Это 0 часов и ${time} минут`;
            break;
        case 1:
            result = `Это 1 час и ${time - 60} минут`;
            break;
        case 2:
            result = `Это 2 часа и ${time - (60 * 2)} минут`;
            break;
        case 3:
            result = `Это 3 часа и ${time - (60 * 3)} минут`;
            break;
        case 4:
            result = `Это 4 часа и ${time - (60 * 4)} минут`;
            break;
        case 5:
            result = `Это 5 часов и ${time - (60 * 5)} минут`;
            break;
        case 6:
            result = `Это 6 часов и ${time - (60 * 6)} минут`;
            break;
        case 7:
            result = `Это 7 часов и ${time - (60 * 7)} минут`;
            break;
        case 8:
            result = `Это 8 часов и ${time - (60 * 8)} минут`;
            break;
        case 9:
            result = `Это 9 часов и ${time - (60 * 9)} минут`;
            break; 
        case 10:
            result = `Это 10 часов и ${time - (60 * 10)} минут`;
            break;
    }
    
    return result;
}

//2
function findMaxNumber(one, two, three, four) {
    if(typeof(one) !== 'number' || typeof(two) !== 'number' || typeof(three) !== 'number' || typeof(four) !== 'number' || one === null || two === null || three === null || four === null) {
        return 0;
    }else{
        return Math.max(one, two, three, four);
    }
}
