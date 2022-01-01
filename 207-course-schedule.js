// https://leetcode.com/problems/course-schedule/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 
 hashmap
 
 key->value such that prereq->course
 
 
 
 */
 var canFinish = function(numCourses, prerequisites) {
    let preMap = new Map();
    
    // Add each course in prerequisites to a map object such that
    // key->value is course->all prereqs i.e. this is our adjacency
    // list
    for (let i = 0; i < numCourses; i++) preMap.set(i, []); 
    for (let [crs, pre] of prerequisites) preMap.get(crs).push(pre);

    // hash set to keep track of what we've visited
    let visitSet = new Set();
      
    function dfs(crs) {
        // check if we've visited the course and if so, it's a cycle
        // so return false
        if (visitSet.has(crs)) return false;
        
        // if the course's prereq is empty return true
        if (preMap.get(crs).length === 0) return true;
        
        // we're visiting this course now
        visitSet.add(crs);
        
        // check the prereq's if it has cycles
        for (let pre of preMap.get(crs)) {
            if (!dfs(pre)) return false;
        }
        
        // we're not visiting this course any more
        visitSet.delete(crs);
        
        // we know the current course doesn't have any cycles
        // so we can mark this course as empty so when we refer to
        // it in later recursions, it can return true immediately
        // i.e. we're caching the course
        preMap.set(crs, []);
        
        return true;
    }
    
    // we need to check every single course from 0 to the number of
    // courses, numCourses, because not all courses may be connected
    // for example: 0->1 and 2->3 and 1->4
    for (let crs = 0; crs < numCourses; crs++) {
        if (!dfs(crs)) return false;
    }
    
    return true;
};