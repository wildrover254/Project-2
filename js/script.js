/**
 * The showPage function accepts two arguments, list and page. List is used to store the student
 * objects from data.js and page stores the desired page number. The variables startIndex and 
 * endIndex determine the student obejects to be displayed on each page. The studentList variable 
 * stores the ul. The function then loops over the student obects and displays the correct ones
 * on the page. The studentItem variable holds a template literal of the HTML and the info from
 * the student objects. Then insertAdjacentHTML is used to append the appropriate studentItems
 * to the ul.
 */
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   
   const studentList = document.getElementsByClassName('student-list');

   studentList[0].innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {

         const studentItem = `<li class="student-item cf">
                                 <div class="student-details">
                                    <img class="avatar" src=${data[i].picture.large} alt="Profile Picture">
                                    <h3>${data[i].name.first} ${data[i].name.last}</h3>
                                    <span class="email">${data[i].email}</span>
                                 </div>
                                 <div class="joined-details">
                                    <span class="date">Joined ${data[i].registered.date}</span>
                                 </div>
                              </li>`;
         studentList[0].insertAdjacentHTML('beforeend', studentItem);
      }
   }
}


/**
 * The addPagination function accepts one argument, list, which store the data object. Using the length
 * property of list and Math.ceil the number of total pages and corresponding buttons is stored in the
 * numOfPages const. the linkList const stores the ul with the class link-list and we set its innerHTML 
 * value to an empty string. The function uses a for loop to create and add five buttons to the bottom 
 * of the page and uses className to set the first one to be the 'active' button. An event listener is 
 * put on linkList and that switches the active class to the clicked button and then calls the showPage 
 * function, passing in the value of the list parameter and the textContent value of the clicked button. 
 */
function addPagination (list) {
   const numOfPages = Math.ceil(list.length / 9);

   const linkList = document.getElementsByClassName('link-list');
   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i++) {
         const button = `<li>
                           <button type = "button">${i}</button>
                        </li>`;
         linkList[0].insertAdjacentHTML('beforeend', button)
   
         const active = document.querySelector('button');
         active.className = 'active';
   }

   linkList[0].addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         const active = document.querySelector('.active');
         active.className ='';
         e.target.className = 'active';

         showPage(list, e.target.textContent)
      }
   })
}

//These are the initial function calls that display the first page of nine students.
showPage(data, 1);
addPagination(data);