//1
function calculateVolumeAndArea(kubLength) {
    if(kubLength > 0 && kubLength !== null && Number.isInteger(kubLength)) {
        return `Объем куба: ${kubLength * kubLength * kubLength}, площадь всей поверхности: ${kubLength * kubLength * 6}`;
    }else{
        return `При вычислении произошла ошибка`;
    }
}
