
const itemsPerPage = 9;
const linkList = document.querySelector('.link-list');
const studentList = document.querySelector('ul.student-list');
// Appending search bar to index.htnml

const header = document.querySelector('header');
const searchBarHTML = `<label for="search" class="student-search">
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>`
header.insertAdjacentHTML('beforeend', searchBarHTML);

// showPage function to take the array of objects and also the page number

function showPage(list, page) {
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
   linkList.innerHTML = '';
   let numOfPages = Math.ceil(list.length / itemsPerPage);
   let pageButton = '';
   for (i=1; i <= numOfPages; i++) {
      pageButton = `<li>
         <button type="button">${i}</button>
      </li>`
      linkList.insertAdjacentHTML('beforeend', pageButton);
   }
   const firstButton = document.querySelector('button:first-child');
   if (firstButton) {
      firstButton.classList.add('active');
   }
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

// use search value to return only the results of the data set that matches the criteria

const search = document.querySelector('#search')

// create a function that takes items from first array and then shifts them into the second array based on search criteria

let results = [];
function newResults(list, input) {
	results = [];
   input = input.toLowerCase();
	for (i=0; i < list.length; i++){
      const userData = `${list[i].name.first} ${list[i].name.last} ${list[i].email}`
		if (userData.toLowerCase().indexOf(input) > -1) {
			results.push(list[i]);
		}
	}
   return results;
}

// Search event listener

search.addEventListener('keyup', () => {
	input = search.value;
	newResults(data, input);
	showPage(results,1);
   addPagination(results);
   if (studentList.innerHTML == '') {
      studentList.innerHTML = `<p>No results found</p>`;
   }
})