// class ArrayOperation {
//     _delimiter = 2;
//
//     /**
//      *
//      * @param array Массив
//      * @param startDigit От числа
//      * @param finishDigit До числа
//      * @param delimiter делитель
//      */
//     constructor(array = [], startDigit = 0,
//                 finishDigit = 0, delimiter = null)
//     {
//         this.array = array;
//         this.startDigit = startDigit;
//         this.finishDigit = finishDigit;
//         this.delimiter = delimiter;
//     }
//
//     /**
//      * заполнение массива четными числами
//      */
//     inputOddDigit() {
//         this._process(this._delimiter, true);
//     }
//
//     /**
//      * заполнение массива нечетными числами
//      */
//     inputNotOddDigit() {
//         this._process(this._delimiter);
//     }
//
//     /**
//      * вывод ошибки (Не задано свойство delimiter)
//      */
//     inputManualDelimiterDigit () {
//         if (!this.delimiter) {
//             console.error('Не задано свойство delimiter');
//             return;
//         }
//
//         this._process(this.delimiter);
//     }
//
//     /**
//      * вывод массива в консоль
//      */
//     printArray() {
//         console.log(this.array);
//     }
//
//     /**
//      * обнуление массива
//      * @private
//      */
//     _checkArray() {
//         if (this.array.length) {
//             this.array = [];
//             console.warn('Данные в массиве были удалены');
//         }
//     }
//
//     /**
//      * Проверка на правильность заполнения данных пользователем
//      * @private
//      */
//     _checkStartAndFinishDigit() {
//         if (this.startDigit === this.finishDigit) {
//             console.warn('Диапазон равен 0');
//         } else if (this.startDigit > this.finishDigit) {
//             let temp = this.startDigit;
//             this.startDigit = this.finishDigit;
//             this.finishDigit = temp;
//             console.warn('Значение начала диапазон больше его конца. ' +
//                 'Они будут заменены');
//         }
//
//         if (this.startDigit < 0) {
//             this.startDigit = -this.startDigit;
//             console.warn('Значение начала диапазона будет взято по модулю');
//         }
//
//         if (this.finishDigit < 0) {
//             this.finishDigit = -this.finishDigit;
//             console.warn('Значение конца диапазона будет взято по модулю');
//         }
//     }
//
//     /**
//      * Заполнение массива
//      * @param delimiter делитель
//      * @param isNot бул отрицания
//      * @private
//      */
//     _process(delimiter, isNot = false) {
//         this._checkArray();
//         this._checkStartAndFinishDigit();
//
//         for (let i = this.startDigit; i <= this.finishDigit; i++) {
//             if (isNot ? !(i % delimiter) : i % delimiter) {
//                 this.array.push(i);
//             }
//         }
//     }
// }
// let arrHelper1 = new ArrayOperation([], 1, 100);
// arrHelper1.inputNotOddDigit();
// arrHelper1.printArray();
//
// let arrHelper2 = new ArrayOperation([], 1, 100);
// arrHelper2.inputOddDigit();
// arrHelper2.printArray();
//
// let arrHelper3 = new ArrayOperation([], 1, 100, 5);
// arrHelper3.inputManualDelimiterDigit();
// arrHelper3.printArray();
//_________________________________________________________