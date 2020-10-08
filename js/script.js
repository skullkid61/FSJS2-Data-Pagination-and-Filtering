
const itemsPerPage = 9;
const linkList = document.querySelector('.link-list');

// Appending search bar to index.htnml

const header = document.querySelector('header');
const searchBarHTML = `<label for="search" class="student-search">
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>`
header.insertAdjacentHTML('beforeend', searchBarHTML);


// showPage function to take the array of objects and also the page number

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

// addPaginaction to add the buttons at the bottom of the screen
function addPagination(list) {
   let numOfPages = Math.ceil(list.length / itemsPerPage);
   let pageButton = '';
   for (i=1; i <= numOfPages; i++) {
      pageButton = `<li>
         <button type="button">${i}</button>
      </li>`
      linkList.insertAdjacentHTML('beforeend', pageButton);
   }
   const firstButton = document.querySelector('button:first-child');
   firstButton.classList.add('active');
}

// functions for page load

showPage(data,1);
addPagination(data);

// page select event listener

linkList.addEventListener('click', (e) => {
   if (e.target.tagName === 'BUTTON') {
      document.querySelector('button.active').classList.remove('active');
      e.target.classList.add('active');
      let pageNo = e.target.innerHTML;
      showPage(data,pageNo);
   }
});