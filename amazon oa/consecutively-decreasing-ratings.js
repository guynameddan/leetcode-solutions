/*
Question 1:

There is a new product launched and its customer ratings are being recorded in an array. The ratings are being monitored and analyzed if there is any decrease in the ratings.
Find the number of periods in which the rating is consecutively decreasing.

Example - Ratings = [4,3,5,4,3]
Periods (in other words sub arrays in which ratings are decreasing):
One day periods = [4],[3],[5],[4],[3] (count of subarrays is 5)
Two day periods = [4,3],[5,4],[4,3] (count of subarrays is 3)
3 day periods = [5,4,3] (count of subarrays is 1)
So, the output for this example will be 9 (5 + 3 + 1)
*/

// brute force -> O(n^2)
function periodsOfDecreaseRating(ratings) {
    let total = 0;

    for (let i = 0; i < ratings.length; i++) {
        let current = 1,
        prev = ratings[i];

        j = i + 1;

        while (j < ratings.length && prev > ratings[j]) {
            current++;
            prev = ratings[j];
            j++
        }
        total += current;
    }

    return total;
}

/*
two pointer -> O(n)

Iterate through ratings once. This solution is pretty genius. You can maintain 2 pointers.
The moment a decreasing sequence is found we just find the length/range between the
pointers and add 1 because each element can be a decreasing rating of itself. Think of this,
if we have a subarray of [5,4,3] we know the entire subarray is decreasing. But why can we
just do right-left+1? If the entire subarray is decreasing then we know each subarray of
it is also decreasing. If left pointer was on '5' and right pointer was at '4' the total
decrease is 1 + the index range between the two. Let's increment the right pointer forward
and leave the left alone. 3 is less than 4 so it's still decreasing. We know since it's
still decreasing everything before is decreasing too and therefore can be a part of the
sequence i.e. right pointer - left pointer + 1 (for itself).
*/
function periodsOfDecreaseRating(ratings) {
    let total = 0,
    left = 0;

    for (let right = 0; right < ratings.length; right++) {
        if (right > 0 && ratings[right] < ratings[right-1]) total += right - left + 1;
        else {
            total++;
            left = right;
        }
    }

    return total;
}