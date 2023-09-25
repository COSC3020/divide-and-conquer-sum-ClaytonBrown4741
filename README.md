[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11765941&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

EXPLANATION:
To begin, we start with defining the recurrence relation. In this case, it would  
look as follows:  
T(n) = 1 if n <= 2. Otherwise, T(n)= 3T(n/3)+1  

In this case, the base case is 1 because when n <= 2 we have to return the current  
answer so that it can be added with the others. For the other case, the "3T" was  
in order to account for the 3 recursive calls that are taken every time. The  
"n/3" in it refers to the fact that we're dividing the size of the array by 3 every  
time we call a recursive call. Finally, the last "+1" refers to the if statement used  
to check whether we are in the base case yet.  

Using this, we can begin to answer the question. I used the following reasoning.  
T(n) = 3T(n/3)+1   
  
= 3(3T(n/9))+1+1  
     
= 9T(n/9)+2  
     
= 9(3T(n/27))+1+2  
     
= 27T(n/27)+3  
     
= $3^iT(n/3^i)+i$    
    
(For the following, i = $log{_3}{n}$ because this gives us the base case for T  
     
= $3^log{_3}{n}T(n/3^log{_3}{n}) + log{_3}{n}$  

= $nT(1)+log{_3}{n}$  
       
= $'n+\log{_3}{n} /in \Theta(n)'$  
     
So in the end, the answer is $\Theta(n)$. The reason for this is because, although we're  
still using recursion, we're still just adding elements in an array. If we were sorting  
them, then it would most likely take longer.

     

