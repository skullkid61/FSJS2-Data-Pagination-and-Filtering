/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  const studentList = document.querySelector('ul.student-list');
  studentList.innerHTML = '';
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = page * itemsPerPage;
  let studentItem = '';
  for (i=0;i<list.length;i++) {
     if (i >= startIndex && i < endIndex) {
        studentItem = `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>`
         studentList.insertAdjacentHTML('beforeend', studentItem);
     }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   let numOfPages = Math.ceil(list.length / itemsPerPage);
   const linkList = document.querySelector('.link-list');
   let pageButton = '';
   for (i=1; i < numOfPages; i++) {
      if (i == 1) {
         pageButton = `<li>
            <button type="button" class="active">${i}</button>
         </li>`
      } else {
         pageButton = `<li>
            <button type="button">${i}</button>
         </li>`
      }
      
      linkList.insertAdjacentHTML('beforeend', pageButton);
   }
}



// Call functions

showPage(data,1);
addPagination(data);