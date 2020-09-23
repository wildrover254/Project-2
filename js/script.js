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

   studentList.innerHTML = "";

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


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list) {
   const numOfPages = Math.ceil(list.length / 9);

   const linkList = document.getElementsByClassName('link-list');
   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i++) {
         const button = `<li>
                           <button type = "button">${i}</button>
                        </li>`;
         linkList.insertAdjacentHTML('beforeend', button)
   }


// Call functions
