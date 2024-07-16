# Pagination Component

This component will handle the rendering of page buttons and the navigation logic.

steps:-

1. We require three things here,

(1), previous button
(2), Next button
(3), PageNumber buttons (like 1 2 3 4), so we create renderPageNumber() function

2. In this component we pass three parameter as a props

totalPages, => This tells about total no of pages
currentPage, => This tells about current Page
onPageChange => If user want to jump of any specific page then user can go with this function

3. In handleClick() => we pass page as an argument
   and here we check the condition using AND operator which means both the condition should be true otherwise condition became false.

condition is that
a. page should be greater than or equal to 1
b. page should be leaser than or equal to totalPages

if both condition true then onPageChange function called and it changing the current page to specified page

4.  renderPageNumber() => here first we create an empty array and run a for loop till totalPages

then push the data into newArray as a button where we call handleClick function and give the className and pass the index as key and return the newArray
and call in the return function

# App.js

1.  We need to create a hardcore data or if we have data then we provide there
2.  set the numbers of items per page (like how many data I want in single page )
3.  Create a state to keep the track of current page
4.  Calculate the total number of pages based on the data length and items per page

Total Pages Calculation:

totalPages = Math.ceil(data.length / itemsPerPage)
In this case: totalPages = Math.ceil(50 / 10) = 5

5.  Define a function to update the current page. (handlePageChange)
6.  Calculate the subset of data to display on the current page (current Data)
7.  Render the current data and the Pagination component.

# calculation of current data and start Index

Example- we have 20 list of items in data and we want to display 5 items per page

const itemsPerPage = 5;

🚀 calculation for page 1:-

✨Calculate startIndex:

const startIndex = (currentPage - 1) * itemsPerPage
// for currentPage = 1
// startIndex = (1 - 1) _ 5 => 0

✨Calculate currentData:

const currentData = data.slice(startIndex, startIndex + itemsPerPage);
// For startIndex = 0 and itemsPerPage = 5:
// currentData = data.slice(0, 5)
// This will extract items from index 0 to 4 (5 items)

✨Calculate Data Displayed on Page 1:
currentData = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

🚀 calculation for page 1:-

✨Calculate startIndex:

const startIndex = (currentPage - 1) * itemsPerPage;
// For currentPage = 2:
// startIndex = (2 - 1) _ 5 = 5

✨Calculate currentData:

const currentData = data.slice(startIndex, startIndex + itemsPerPage);
// For startIndex = 5 and itemsPerPage = 5:
// currentData = data.slice(5, 10)
// This will extract items from index 5 to 9 (5 items)

✨Calculate Data Displayed on Page 2:
currentData = ["Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

same goes with other pages
