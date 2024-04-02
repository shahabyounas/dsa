/**
You are given an array people where people[i] is the weight of the ith person, 
and an infinite number of boats where each boat can carry a maximum weight of limit.
 Each boat carries at most two people at the same time, provided the sum of the 
 weight of those people is at most limit.
 Ref:  https://leetcode.com/problems/boats-to-save-people/description/
 *
 * @param {Array} people
 * @param {Number} limit
 * @return {Number} boats
 */


function boatsToSavePeople(people, limit) {
    people.sort((a,b) => a - b)

    let boats = 0
    let light = 0
    let heavy = people.length - 1

    while(light <= heavy){
        if(people[light] + people[heavy] <= limit) {
            light++
        }
        
        heavy--
        boats++
    }

    return boats

}
  
  module.exports = {
    boatsToSavePeople,
  };
  

  