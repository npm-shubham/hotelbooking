# Getting Started with

In the project directory, you can use this to run the project

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## This project is used to demonstrate Observer APIs and hosting using Vercel

- ### Observer API
    - This function is primarily used in [FinalPay.js](./src/FinalPay.js).
    - The [useIntersectionObserver.js](./src/useIntersectionObserver.js) has the functionality which contains the main intersection observer code.
    - Please refer to [FinalPay.css](./src/FinalPay.css) to check the css of how the intersection observer api is working. 
- ### Vercel
    - I've used Vercel to host the whole project. Also since I've used the master branch to host the project, as soon as the master branch is updated the Vercel gets the updated code and updates the changes.
    - Use this [link](https://hotelbooking-woad-ten.vercel.app/) to see the hosted application.
    Alternate [link](https://hotelbooking-npm-shubhams-projects.vercel.app/)

## Navigate the project 
    - Click on Explore More button. It will redirect you to BookingDetails page and on this page click on payment button to redirect you to FinalPay page. 
    - Note: The link might not work, showing Bad Connection or something. Release the catched data to continue.