//1
function calculateVolumeAndArea(kubLength) {
    if(kubLength > 0 && kubLength !== null && Number.isInteger(kubLength)) {
        return `Объем куба: ${kubLength * kubLength * kubLength}, площадь всей поверхности: ${kubLength * kubLength * 6}`;
    }else{
        return `При вычислении произошла ошибка`;
    }
}

//2
function getCoupeNumber(mesto) {
    if(!Number.isInteger(mesto) || mesto < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }else if(mesto === 0 || mesto > 36) {
        return 'Таких мест в вагоне не существует';
    }else{
        // return Math.floor((mesto +3) / 4);
        return Math.ceil(mesto/4);
    }
}
