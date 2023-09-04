const calcList = document.querySelector('.calc-list');
const calcText = document.querySelector('.calc-input span');
 
let result = '0';
let resultArr = [];
calcText.innerText = result;

let count = 0;
function calcValues(text, calc){
    if(((text === '0' && calc > 0) || text > 0 ) && !isNaN(text) ) {
        // 숫자
        if(calc === "0") calc = text;
        else {
            calc += text;
        }
    } else {
        // 등호
        if(text !== '＝') {
            if(count === 0) {
                count++;
                resultArr.push(calc);
                resultArr.push(text);
                calc = '0';
                return calc;
            } else {
                const pop = resultArr.pop();
                const pop2 = Number(resultArr.pop());
                const calcNum = Number(calc);
                if(pop === '＋') {
                    resultArr.push(pop2 + calcNum);
                    resultArr.push(text);
                } else if (pop === '－') {
                    resultArr.push(pop2 - calcNum);
                    resultArr.push(text);
                } else if (pop === '×') {
                    resultArr.push(pop2 * calcNum);
                    resultArr.push(text);
                } else if (pop === '÷') {
                    resultArr.push(pop2 / calcNum);
                    resultArr.push(text);
                }
                return '0';
            }
        } else {
            if(count === 0) {
                return calc;
            } else {
                count = 0;
                const pop = resultArr.pop();
                const pop2 = Number(resultArr.pop());
                const calcNum = Number(calc)
                if(pop === '＋') {
                    return pop2 + calcNum;
                } else if (pop === '－') {
                    return pop2 - calcNum;
                } else if (pop === '×') {
                    return pop2 * calcNum;
                } else if (pop === '÷') {
                    return pop2 / calcNum;
                }
            }
        }
    }

    return calc;
}

calcList.addEventListener('click', (e) => {
    const text = e.target.innerText;
    if(text === 'AC') {
        result = '0';
        calcText.innerText = result;
        resultArr = [];
        count = 0;
        return;
    }
    console.log(text);
    result = calcValues(text, result);
    calcText.innerText = resultArr.length > 0 ? resultArr[0] : result;

    console.log('result:',result);
    console.log('arr:',resultArr);

    console.log(calcText.clientWidth)
    const fs = document.defaultView.getComputedStyle(calcText).getPropertyValue("font-size");
    if(calcText.clientWidth > 280) {
        calcText.style.fontSize = `${parseInt(fs) - 2}px`;
    }
});

