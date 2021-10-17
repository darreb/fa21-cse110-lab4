1. The bug was that num1 and num2 were passed in as strings, so result gets type casted to a string.
2. I would fix it by using Number() on num1 and num2, before adding.
