let itemsPerPage = document.querySelector('#itemsPerPage option[selected]').value;
const linkList = document.querySelector('.link-list');
const studentList = document.querySelector('ul.student-list');

// Appending search bar to index.htnml

const header = document.querySelector('header');
const searchBarHTML = `<label for="search" class="student-search">
         <input id="search" placeholder="Search by name..." value="">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>`;
header.insertAdjacentHTML('beforeend', searchBarHTML);
const search = document.querySelector('#search');

// showPage function takes an array of objects and also the page number
// this will append all results of the array to the page

function showPage(list, page) {
	studentList.innerHTML = '';
	let startIndex = page * itemsPerPage - itemsPerPage;
	let endIndex = page * itemsPerPage;
	let studentItem = '';
	for (i = 0; i < list.length; i++) {
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
         </li>`;
			studentList.insertAdjacentHTML('beforeend', studentItem);
		}
	}
}

// a function that takes items from first array and then shifts them into a results array based on search criteria

function newResults(list, input) {
	let results = [];
	input = input.value.toLowerCase();
	for (i = 0; i < list.length; i++) {
		const userData = `${list[i].name.first} ${list[i].name.last} ${list[i].email}`;
		// if index of the search text is greater than -1 of the userData,
		// it would count as a match and add the results to the new array
		if (userData.toLowerCase().indexOf(input) > -1) {
			results.push(list[i]);
		}
	}
	return results;
}

// addPaginaction to add the buttons at the bottom of the screen

function addPagination(list) {
	linkList.innerHTML = '';
	let numOfPages = Math.ceil(list.length / itemsPerPage);
	let pageButton = '';
	for (i = 1; i <= numOfPages; i++) {
		pageButton = `<li>
      <button type="button">${i}</button>
    </li>`;
		linkList.insertAdjacentHTML('beforeend', pageButton);
	}
	const firstButton = document.querySelector('button:first-child');
	if (firstButton) {
		firstButton.classList.add('active');
	}
}

// page load functions

function loadList(list, input) {
	showPage(newResults(list, input), 1);
	addPagination(newResults(list, input));
}

loadList(data, search);

// page select event listener

linkList.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		document.querySelector('button.active').classList.remove('active');
		e.target.classList.add('active');
		let pageNo = e.target.innerHTML;
		showPage(newResults(data, search), pageNo);
	}
});

// Search event listener to use all previous functions on each keyup

search.addEventListener('keyup', () => {
	loadList(data, search);
	if (studentList.innerHTML == '') {
		studentList.innerHTML = `<p class="no-results">No results found</p>`;
	}
});

// Event listener to select items per page

const itemsDropDown = document.querySelector('#itemsPerPage');

itemsDropDown.addEventListener('change', (e) => {
	itemsPerPage = e.target.value;
	loadList(data, search);
});
