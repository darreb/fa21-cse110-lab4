1. "3". the length of prices is 3, so i will stop the for loop when i = 3. Additionally, i is a var variable, and var variables have no block scope, so it will successfully print the value of i even after the for loop is done.
2. "150". var can be redeclared, so there is no error with the multiple iterations. vars have no block scope, so it lasts beyond the for loop block. Additionally, since 300 is the last price and 0.5 is the discount, discountPrice will be the last discounted price, which is 300 * (1 - 0.5) = 150.
3. "5000". discounted.push(finalPrice) will push in the old value of finalPrice and return the size of the new array. Thus, finalPrice represents the current 100(discountedPrice)/(discounted.length). At the third iteration, finalPrice = 150 * 100/ 3, since the finalPrice gets pushed in a third time. The console.log will print the value of finalPrice after the third iteration.
4. "0, 5000, 5000". discounted.push(finalPrice) will push in the old value of finalPrice and return the size of the new array. Thus, the first element of discounted will always be 0. Then, the first reassignment of finalPrice is after the first discountedPrice which is 50 * 100/1 = 5000. In the second iteration, 5000 is the old value of finalPrice(from the fiirst iteration), and will get pushed in, then finalPrice gets reassigned to 5000 once again. In the final iteration, 5000(from iteration 2) gets pushed in, and finalPrice gets reassigned for a third time, but never gets pushed in. Thus, it will return "0, 5000, 5000".
5. "ReferenceError: i is not defined". Since i is a let variable, it gets terminated after the for loop block, since let variables have block scope.
6. "ReferenceError: discountedPrice is not defined". Since discountedPrice is a let variable, it gets terminated after the for loop block, since let variables have block scope.
7. "5000". The algorithm is the same from the var section, so the algorithm explanation is the same. Additionally, since the let was declared outside the for loop block, it persists until the end of the function.
8. "0, 5000, 5000". The algorithm is the same from the var section, so the algorithm explanation is the same. Additionally, since the let was declared outside the for loop block, it persists until the array gets returned.
9. "ReferenceError: i is not defined". Since i is a let variable, it gets terminated after the for loop block, since let variables have block scope.
10. "3". The length of prices is 3. Additionally, since length never gets reassigned past its initial declaration, there is no error.
11. "50, 100, 150". It pushes the discountedPrice at each iteration. Additionally, there is no error, since there was no reassignment to discounted, it was only pushed to.
12. a. student.name<br />
    b. student['Grad Year']<br />
    c. student.greeting()<br />
    d. student['Favorite Teacher'].name<br />
    e. student.courseLoad[0]
13. a. 32. 2 gets mapped to '2', and '2' is appended to '3'.<br />
    b. 1. '-' is a number only operation, so '3' gets mapped down to 3, and 2 gets subtracted from 3<br />
    c. 3. null is mapped to 0<br />
    d. 3null. null gets mapped to 'null', and 'null' is appended to '3'.<br />
    e. 4. true gets mapped to 1 and added to 3<br />
    f. 0. false and null both get mapped to 0 and are added together. <br />
    g. 3undefined. undefined gets mapped to "undefined" and gets appended to 3.<br />
    h. NaN. '-' is a number only operation, so '3' gets mapped down to 3, and undefined is mapped to NaN. Any operation done between a number and NaN is NaN.<br />
14. a. true, '2' becomes 2 and gets compared to 1<br />
    b. false, Both values are compared lexicographically. It will compare the first character of both strings to see which is greater. '2' > '1', so it returns false <br />
    c. true, '2' gets converted to a 2 and gets compared to 2<br />
    d. false, '2' does not get converted and gets compared to 2<br />
    e. false, true is mapped to 1 when converted to an integer, then it gets compared to 2<br />
    f. true, Boolean(2) returns true with input 2, and true === true.<br />
15. The difference between == and === is that == will try to convert one of the arguments to an appropriate type in order to compare both values as if they're the same type, but === will do no such conversion and will just compare the two values as different types.
17. [ 2, 4, 6 ]. We pass in the array and doSomething function into modifyArray. In modifyArray, we have a newArr that we push our result into. The result that we'll push will be based on our callback function. In this case, our callback function is doSomething, which multiplies the argument by 2 and returns it. This matches our result, as the elements of our array are now multiplied by 2.
19. 1
    4
    3
    2 
