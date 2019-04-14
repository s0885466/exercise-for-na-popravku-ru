/**
 * Объект letters - включает в себя массивы букв верхнего и нижнего регистра
 * smallLetters и bigLetters
 *
 * Функции:
 *
 * changeRegisterStr(str, reg, firstLetterInversion = false) - главная функция,
 * которая принимает в себя строку str из английских букв,
 * reg - регистр, может быть 'up' или 'down'
 * firstLetterInversion - булево значени инверсия первой буквы слова,
 * по умолчанию false
 *
 * getBigLetter(letter) - получить букву верхнего регистра
 * getSmallLetter(letter) - получить букву нижнего регистра
 * isLetterBig(letter) - является ли буква буквой верхнего регистра
 * inversionLetter(letter) - меняет регистр буквы
 *

**/

let letters = {
        smallLetters: ['a','b','c','d','e','f','j','h',
            'i','j','k','l','m','n','o','p','q','r',
            's','t','u','v','w','x','y','z'],
        bigLetters: ['A','B','C','D','E','F','J','H',
            'I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z'],
    };

function changeRegisterStr(str, reg, firstLetterInversion = false) {

    let newStr = '';

    if (reg == 'up'){
        Array.from(str).forEach(letter => {
            newStr += getBigLetter(letter);
        });
    } else if (reg == 'down'){
        Array.from(str).forEach(letter => {
            newStr += getSmallLetter(letter);
        });
    }

    if (firstLetterInversion == false){
        return newStr;
    } else {
        let newFirstLetter = inversionLetter(newStr[0]);
        return newFirstLetter + newStr.substr(1);
    }
}

function getBigLetter(letter){
    for (let i = 0; i < letters.smallLetters.length; i++){
        if (letter === letters.smallLetters[i]){
            letter = letters.bigLetters[i];
            return letter;
        }
    }
    return letter;
}

function getSmallLetter(letter){
    for (let i = 0; i < letters.bigLetters.length; i++){
        if (letter === letters.bigLetters[i]){
            letter = letters.smallLetters[i];
            return letter;
        }
    }
    return letter;
}

function isLetterBig(letter){
    for (let i = 0; i < letters.bigLetters.length; i++){
        if (letter === letters.bigLetters[i]){
            return true;
        } else return false;
    }
}

function inversionLetter(letter){
    if (isLetterBig(letter)){
        for (let i = 0; i < letters.bigLetters.length; i++){
            if (letter === letters.bigLetters[i]){
                return letters.smallLetters[i];
            }
        }
    }
    else {
        for (let i = 0; i < letters.smallLetters.length; i++) {
            if (letter === letters.smallLetters[i]){
                return letters.bigLetters[i];
            }
        }
    }
}


console.log(changeRegisterStr('car','up'));
console.log(changeRegisterStr('Hello WORLD','down', true));
