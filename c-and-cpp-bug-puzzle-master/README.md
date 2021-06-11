# C and C++ Bug Puzzle

This git repository should be used for reviewing code test.

<br/>

## TEST #4- C/C++ bug locate
### Objectives:
 - Examine the following C/C++ code, and find the bug(s)- highlight the bug(s).
 - HINT: the bug(s) are not cosmetic/syntax- the bug(s) prevent execution a intended! (it should print “A(2) + B(3) = C(5)”).
- Repair the bug(s), and explain.

<br/>

## Here is the Code with bug to fix:
```
void main() {
	int A = 2, B = 3;
	
	//This should print “A(2) + B(3) = C(5)”
	printf(“A(%d) + B(%d) = C(%d)\n”, &A, &B, addTwoNumbers(A, B));
	
}
int addTwoNumbers(int *num1, int *num2) {
	int result = 0;
	result = *num1 + *num2;
return result;
}
```

<br/>

## Corrected Code:
```
void main() {
	int A = 2, B = 3;
	
	//This should print “A(2) + B(3) = C(5)”
	printf("A(%d) + B(%d) = C(%d)\n", A, B, addTwoNumbers(A, B));
	
}

int addTwoNumbers(int num1, int num2) {
	int result = 0;
	result = num1 + num2;
return result;
}
```

<br/>

### Details of correction
1. "printf" statement had invalid double quotes.
2. "printf" statement had ampersand with A and B, causing a syntax error.