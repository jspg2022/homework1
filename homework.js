//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//    Home Assignment 1 - sorting algorithms 1 & string manipulation 1
// ----------------------------------------------------------------------
//              grading system: (for each question)
//       
// 1. if the code is not working - *0
// 2. if the code is working but not according to the instructions - *0.5
// 3. if there's no explanation -  *0.75
// 4. late submission - final_grade -=  10*days_late
//
// ----------------------------------------------------------------------
//  --------------- DUE DATE: 05/12/2022 at 11:59pm ---------------------
// ______________________________________________________________________


// ______________________________________________________________________
//
// ------------------------  PART 1 - 60 Points -------------------------
//_______________________________________________________________________


// 1. sorting algorithms - bubble sort, selection sort, insertion sort
// part 1 - 60 points 20 points each

/*
* write the fulling functions below - you can't any built-in methods
* click the link to see the algorithm
* try implementing the algorithm in your own words
*/

// helpfull links:
// link to visualize the sorting : https://visualgo.net/en/sorting
// https://algorithm-visualizer.org/brute-force/bubble-sort (bubble sort)
// https://algorithm-visualizer.org/brute-force/selection-sort (selection sort)
// https://algorithm-visualizer.org/brute-force/insertion-sort (insertion sort)


// 1.1 bubble sort - https://en.wikipedia.org/wiki/Bubble_sort
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) { // at the end of the first pass the very last element in the array wiil be the maximom value in the array so it will be the last element, will be in place, so in the next sweep dond need to walk through
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // if the first element bigger than the next element, swap those values
            }
        }
    }
    return arr
}
console.log('--------------------------------------------------------- \n1.1- bubbleSort:');
let arr1 = [40, 4, 50, 5, 30, 3, 20, 2]
bubbleSort(arr1);
console.log(...arr1);

// 1.2 selection sort - https://en.wikipedia.org/wiki/Selection_sort

const selectionSort = (arr) => {
    for (i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (j = i + 1; j < arr.length; j++) { // התחלנו את הלולאה מהאלמנט הראשון לכן בתנאי נשווה מהאלמנט השני (הראשון מושווה כבר) ועד לסוף המערך
            if (arr[j] < arr[minIndex]) { // התלולאה תעבור על כל המערך עד שתמצא את הערך הנמוך ביותר ותחליף אותו עם המיקום של  הערך הכי גבוהה
                minIndex = j;         // כך בהכרח הערך הקטן ביותר ישאר בצד שמאל במערך והלולאה תמשיך למיין כל פעם מחדש את כל שאר המערך
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log('--------------------------------------------------------- \n1.2- selectionSort:');
const arr2 = [50, 2, 40, 20, 30, 5, 4, 3]
selectionSort(arr2);
console.log(...arr2);

// 1.3 insertion sort - https://en.wikipedia.org/wiki/Insertion_sort

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) { // לולאה תרוץ מאינדקס 1 כדי שתוכל להשוות עם אינקס אפס בהמשך
        key = arr[i]                        // נשתמש בערך זה בהמשך כאשר נרצה לדעת את ערך האינדס של הלולאה 
        let j;
        for (j = i - 1; j >= 0 && (arr[j] > key); j--) { // אינדקס לולאה זו יתחיל מאפס, ולכן חייב להיות גדול או שווה לאפס ולעמוד בתנאי שרשמנו, ובכל איטרציה נוריד אחד מכיוון שאנו בודקים בכל פעם מהו הערך הקטן יותר ואותו מעבירים ימינה לתחילת המערך עד שיעמוד בתנאי 
            arr[j + 1] = arr[j]                          // אם עומד בתנאי הלולאה, נשים את הערך הקטן יותר באינדקס קטן יותר וכך הלולאה תרוץ עד שהערך הקודם קטן יותר, ובכך בעצם מיינו כשכשל איטרציה רצה "לאחור" וממיינת עד למיקום הנכון לפי התנאי  

        }
        arr[j + 1] = key;                              // השמה של הערך לפי המיקום
    }
    return arr
};

console.log('--------------------------------------------------------- \n1.3- insertionSort:');
arr3 = [4, 2, 40, 20, 1, 5, 50, 10];
insertionSort(arr3);
console.log(...arr3);
/*
הסבר:
הלולאה תתחיל מאינקס אחד בכדי שנוכל להשוות לאינדקס שלפנייה וכך נתחיל את המערך הממוין עם האלמנט הראשון
  לאחר מכן הוא בודק את האלמנט הבא ו"מחליף" אותו לאחור לתוך המערך הממוין לפי התנאי בלולאה המקוננת עד שהוא נמצא במיקום הנכון לפי התנאי.
   הוא ממשיך לחזור על מערך ולהחליף פריטים חדשים לאחור לתוך החלק הממוין עד שנגמר התנאי הולואלאות.

*/


//_______________________________________________________________________
//
// ------------------------  PART 2 - 40 Points -------------------------
//_______________________________________________________________________




// 2. working with strings! - without using built-in methods!
// part 2 - 40 points 10 points each


// 2.1 Capitalize the first letter of a string
const capitalize = (str) => {
    let new_str = "";
    let fLetter = str[0];
    const lowerCase = "abcdefghijklmnopqrstuvwxyz" // a-z lowerCase 
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // a-z upperCase
    // this loop will change the first letter from lowerCase to upperCase and vice versa.
    // Both will have the same index number because the quantity and location are the same
    for (let i = 0; i <= lowerCase.length - 1; i++) { // The loop will run through all the lowercase letters in ascending order
        if (fLetter === lowerCase[i]) { // If the first letter in the string is lowercase then:
            fLetter = upperCase[i]    // change the first letter from lowerCase to upperCase
        } else if (fLetter === upperCase[i]) { // Or if the first letter is equal to an uppercase letter then:
            fLetter = lowerCase[i]  // change the first letter from upperCase to lowerCase.
        }
    }
    for (let i = 0; i <= str.length - 1; i++) { // this loop create a new string by conditions
        if (i == 0) {
            new_str = new_str + fLetter        // We put the capital letter obtained from the previous condition into the new variable, it will be the first letter

        } else {
            new_str = new_str + str[i] // In each iteration we will add the next letter from the string, and thus we will get the uppercase letter in the new string and then the rest of the string in lowercase letters
        }
    }
    return new_str
}
console.log('--------------------------------------------------------- \n2.1- capitalize: "hello world" -> "Hello world":');
// example:
let str = "hello world";
console.log(capitalize(str)); // -> "Hello world"


// 2.2 Capitalize the first letter of each word in a string

const capitalizeWords = (str) => { // The argument was given a string so if there is no space assume it is a letter
    let new_str2 = "";
    for (let i = 0; i < str.length; i++) {
        if (i == 0 && str[i] != " ") { // If this is the first index and there is no space
            new_str2 += capitalize(str[i]); // The first index is a letter, so we will use the function we created earlier for a capital letter
        }
        else if (str[i] == " " && str[i + 1] != " ") { // If the index is equal to a space followed by a letter
            new_str2 += " " + capitalize(str[i + 1]) // This means that this is probably a new word, so we will insert a space and run a function on the new letter
            i++ // We skipped the index with the space and inserted the index + 1 (the letter) into the variable, therefore we will add one so as not to write the same letter twice
        }
        else if (str[i] != " ") { // If the index is not equal to zero, and in the previous conditions we have already considered the other cases with spaces
            new_str2 += str[i] // Add the letters to the variable
        }
    }
    return new_str2; // The function will return an uppercase letter at the beginning of each word
};

console.log('--------------------------------------------------------- \n2.2 capitalizeWords: "hey mom" -> -> "Hey Mom":');
// example:
let str2 = "hey mom";
console.log(capitalizeWords(str2)); //-> "Hey Mom"

// 2.3 Reverse a string 
const reverseString = (str) => {
    let new_str3 = "";
    str = capitalize(str); // To change the first letter from an uppercase to a lowercase letter
    // We will change the value of the argument to the value returned from the function "capitalize"
    for (let i = str.length - 1; i >= 0; i--) { // We will start the loop from the end of the string and continue in reverse order
        new_str3 += str[i] //  We will add the received letter to the variable in all (in reverse order)
    }
    return new_str3 // The function will return the reversed word.
};

console.log('--------------------------------------------------------- \n2.3- reverseString: Pizza -> "azzip":');
// example:
let str3 = "Pizza";
console.log(reverseString(str3)); // -> "azzip" - notice that the capital P is not capitalized



// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// but not the white spaces in the middle of the string
const trim = (str) => {
    let new_str4 = "";
    for (let i = 0; i < str.length - 1; i++) {
        if (new_str4 == "" && str[i] == " " && str[i + 1] != " ") { // If there is a space followed by a letter, and the variable is still empty
            new_str4 += str[i + 1]; // Put the letter in the variable
            i++; // We skipped One index, because we entered to the variable index +1, so that we don't return twice
        }
        else if (str[i] == " " && str[i + 1] != " ") { // The same, only this time if the variable is not empty - then add a space because it is probably a new word
            new_str4 += " " + str[i + 1];
            i++;
        }
        else if (str[i] != " ") { // If the value of the index is not equal to a space - it is a letter, add it to the variable
            new_str4 += str[i]
        }
    }
    return new_str4 // The function will return a string without unnecessary spaces, the only space will be one space between words
};

console.log('--------------------------------------------------------- \n2.4- trim: "   hello world   " ->"hello world":');
// example:
let str4 = "   hello world   ";
console.log(trim(str4)); // -> "hello world"


//______________________________________________________________________
//
// ---------------------- BONUS QUESTIONS ------------------------------
//______________________________________________________________________


// Hard mode Bonus! - 15 points -> code wihout explanation will get 0 points

// fibunacci sequence - https://en.wikipedia.org/wiki/Fibonacci_number
// write a function that returns the nth number in the fibonacci sequence
const fibonacci = (n) => {
    let a = 0; //  represents the value of the first number to calculate
    let b = 1; //  represents the second number to calculate
    for (let i = 1; i <= n; i++) {
        result = a + b  // The result variable will receive the sum of the variables we set
        a = b;
        // In each iteration the next number is equal to the result of the two previous numbers we added
        b = result;  // The next number will be equal to the result of the two numbers before it

    }
    return a     // Its first two terms are 1,1 and each term after that is equal to the sum of its two predecessors.
    // So the index value will be equal to the sum of the two numbers before it
}
// in the "result" variable We will set the results of the variable a+b
// We will set "a" to be approximately equal to b, thereby "reversing" the calculation.
//And we will put the value of "b" to be the result obtained by adding the two numbers we received earlier.
//And so in each iteration "a" will be equal to the sum of the two numbers before 
//The result will get:
// r=a+b 1,2,3,5,8,13,21
// a=b   1,1,2,3,5, 8,13   האיבר במקום 7 יהיה שווה לערך 13 בסדרת פיבנוצי 
// b=r   1,2,3,5,8,13,21
console.log("--------------------------------------------------------- \nfibonacci: -> 13:");
let n = 7;
console.log(fibonacci(n)); //-> 13





// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !submit your homework on github and send me the link to your homework!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Good Luck!


// #####################################################################
//  ---------------------- Done? Submit! -------------------------------
// #####################################################################



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~