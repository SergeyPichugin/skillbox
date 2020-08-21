let Game = {
    start: function() {
        let rnd, numAnswerEnd, result;
        let numAnswer = 10;
        rnd = rndGenerate(1, 1000);

        (function numberAnswer() {

            if (numAnswer >= 5 && numAnswer <= 10) {
                numAnswerEnd = 'попыток';
            } else if (numAnswer == 4 || numAnswer == 3 || numAnswer == 2) {
                numAnswerEnd = 'попытки';
            } else if (numAnswer == 1) {
                numAnswerEnd = 'поптыка';
            }

            if (numAnswer > 0) {
                result = prompt('Введите число, у вас есть ' + numAnswer + ' ' + numAnswerEnd, '');
                if (result == null) {
                    alert('Вы отменили игру! Для запуска игры заново презагрузите страницу');
                    return false;
                } else if (isNaN(result)) {
                    alert('Введите число!');
                    numberAnswer();
                } else if (result < rnd) {
                    numAnswer--;
                    alert('Больше!');
                    numberAnswer();
                } else if (result > rnd) {
                    numAnswer--;
                    alert('Меньше!');
                    numberAnswer();
                } else if (result == rnd) {
                    alert('Правильно!');
                }
            } else if (numAnswer == 0) {
                alert('Game over');
            }
        })();

        // генерация числа от 1 до 1000
        function rndGenerate(min, max) {
            // получить случайное число от (min-0.5) до (max+0.5)
            let rand = min - 0.5 + Math.random() * max // было так, но в ситуации от 1 до 1000 можно смело просто умножать на max (max - min + 1);
            return Math.round(rand);
        }
    }
}

export { Game };

// export function start() {
//     let rnd, numAnswerEnd, result;
//     let numAnswer = 10;
//     rnd = rndGenerate(1, 1000);

//     (function numberAnswer() {

//         if (numAnswer >= 5 && numAnswer <= 10) {
//             numAnswerEnd = 'попыток';
//         } else if (numAnswer == 4 || numAnswer == 3 || numAnswer == 2) {
//             numAnswerEnd = 'попытки';
//         } else if (numAnswer == 1) {
//             numAnswerEnd = 'поптыка';
//         }

//         if (numAnswer > 0) {
//             result = prompt('Введите число, у вас есть ' + numAnswer + ' ' + numAnswerEnd, '');
//             if (result == null) {
//                 alert('Вы отменили игру! Для запуска игры заново презагрузите страницу');
//                 return false;
//             } else if (isNaN(result)) {
//                 alert('Введите число!');
//                 numberAnswer();
//             } else if (result < rnd) {
//                 numAnswer--;
//                 alert('Больше!');
//                 numberAnswer();
//             } else if (result > rnd) {
//                 numAnswer--;
//                 alert('Меньше!');
//                 numberAnswer();
//             } else if (result == rnd) {
//                 alert('Правильно!');
//             }
//         } else if (numAnswer == 0) {
//             alert('Game over');
//         }
//     })();

//     // генерация числа от 1 до 1000
//     function rndGenerate(min, max) {
//         // получить случайное число от (min-0.5) до (max+0.5)
//         let rand = min - 0.5 + Math.random() * max // было так, но в ситуации от 1 до 1000 можно смело просто умножать на max (max - min + 1);
//         return Math.round(rand);
//     }
// }