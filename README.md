

# ReactJS Coding Challenge - Manuel Obregozo 

This is a ReactJs challenge that I did as a part of interview process for a Front End developer possition. 
It is a simple application that renders a transaction list between friends and keep that status of your account. 

## Improvements:
- Input for the money can be improved to accept decimal values, for now to make it easier to handle I just used type number
- Error handling, create filters or a more structured validations
- Better scaffolding of the components
- Better theming with more properties, for now it only includes colours
- Better reusability of the styled components (inheritance)
- Better UX/UI for mobile, for now is a working solution, but is not nice for the user because you have to scroll to see the transactions
- Better UI for the errors, for now is only a default alert from the browser
- UI in general: border is missing and it was hard to get the proper size and colours of the fonts from a png file

## Todo's:
- Integration tests, I wanted to used a tool like Cypress or WebdriverIO but I did not have time
- Pretier for code consistency
- Add Typescript for known reasons

## The background
 
Your challenge is to create a web application that helps you send money to friends.
 
On the left side of the screen, you have a form to enter your friend's details. On the right side, you have your account details.
 
You will fill in the form with your friend's details, name, email and amount you'd like to send. Each field of the form has inline validation displaying error messages when one of the field is not valid. Clicking the "Send" button will create a transaction if the fields are valid and there is enough money available in the account.
 
The account shows how much money you've sent so far and how much is available. You can set the initial amount to whichever value you'd like. The difference is represented on a circular graphic which updates every time you send money to someone. Under it, you can see the details of your past transactions.
 
