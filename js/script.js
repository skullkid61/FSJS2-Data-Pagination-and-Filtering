/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

function showStudents(arr) {
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';
   for (i=0;i<arr.length;i++) {
      studentList.innerHTML += `<li class="student-item cf">
      <div class="student-details">
         <img class="avatar" src="${arr[i].picture.large}" alt="Profile Picture">
         <h3>${arr[i].name.first} ${arr[i].name.last}</h3>
         <span class="email">${arr[i].email}</span>
      </div>
      <div class="joined-details">
         <span class="date">Joined ${arr[i].registered.date}</span>
      </div>
      </li>`
   }
}
showStudents(data);

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// function showPage(list, page) {
//   const studentList = document.querySelector('ul.student-list');
//   studentList.innerHTML = '';
//   let startIndex = (page * 9) - 9;
//   let endIndex = page * 9;
  
//    // decide whether to pass through only 9 student at a time or just only display 9 students at a time 
// }

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
