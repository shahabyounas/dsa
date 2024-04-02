/**
Given two strings containing backspaces (identified by the character ‘#’), 
check if the two strings are equal.
 *
 * @param {String} str1
 * @param {String} str2
 * @return {Boolean}
 */


function compareStringsWithBackspaces(str1, str2) {

    function getNextIndex(str, pointer){
        let backspaces = 0
        while(str[pointer] === '#' || backspaces > 0){
            if(str[pointer] === '#') {
                backspaces++
            }else{
                backspaces--
            }
            pointer--
        }
    }

    let pointer1 = str1.length - 1
    let pointer2 = str2.length - 1

    if(pointer1 >= 0 && pointer2 >= 0){

        pointer1 = getNextIndex(str1,pointer1)
        pointer2 = getNextIndex(str2, pointer1)

        if(str1[pointer1] != str2[pointer2]) return false

        pointer1--
        pointer2--
    }

    return true

}
  
  module.exports = {
    compareStringsWithBackspaces,
  };
  