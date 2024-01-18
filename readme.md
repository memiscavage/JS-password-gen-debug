# User story
AS AN employee with access to sensitive data \
I WANT to randomly generate a password that meets certain criteria \
SO THAT I can create a strong password that provides greater security \

## Acceptance critera
GIVEN I need a new, secure password \
\
WHEN I click the button to generate a password\
THEN I am presented with a series of prompts for password criteria\
\
WHEN prompted for password criteria \
THEN I select which criteria to include in the password \
\
WHEN prompted for the length of the password \
THEN I choose a length of at least 8 characters and no more than 128 characters \
\
WHEN asked for character types to include in the password \
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters \
\
WHEN I answer each prompt \
THEN my input should be validated and at least one character type should be selected \
\
WHEN all prompts are answered \
THEN a password is generated that matches the selected criteria \
\
WHEN the password is generated \
THEN the password is either displayed in an alert or written to the page \

### Links and screenshots

![image] (https://github.com/memiscavage/JS-password-gen-debug/assets/153465556/a3bb2cfb-ba69-4833-bab0-e17ff186f52b)



### References
https://www.w3schools.com/js/js_loop_while.asp - Information for 'while loops' \
https://www.w3schools.com/js/js_operators.asp - Information for operators \
https://dev.to/gaelgthomas/array-to-string-without-commas-in-javascript-4mg6#:~:text=In%20JavaScript%2C%20all%20arrays%20have,all%20the%20array%20elements%20concatenated. - Information to remove commas from string \
Received assistance from TA Walter Perry on lines 65 - 92 of script.js \
