
/*
const kingBooksEl = document.getElementById("king-books");

fetch("https://stephen-king-api.onrender.com/api/books")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.data.forEach((books) => {
      kingBooksEl.insertAdjacentHTML(

        "beforeend",
         `<tr>
                <td>${books.Title}</td>
                <td>${books.Year}</td>
                <td>${books.Publisher}</td>
                <td>${books.ISBN}</td>
                <td>${books.Pages}</td>
                <td>${books.Notes[0]}</td>
            </tr>`
      );
    });
  })
  .catch((error) => console.log(error));
 


*/ 

const kingBooksEl = document.getElementById("king-books");
const loaderEl = document.getElementById ("loader")
const tableEl = document.getElementById ("table")

tableEl.classList.add("hide")
loaderEl.classList.add ("show")


fetch("https://stephen-king-api.onrender.com/api/books/")
.then((resp) => resp.json())
  .then((data) => {console.log(data);
      tableEl.classList.remove("hide")
    loaderEl.classList.remove("show")

    data.data.forEach((book) => {
      kingBooksEl.insertAdjacentHTML(
        "beforeend",
        `<tr  data-bookid= "${book.id}">
                <td>${book.Title}</td>
                <td>${book.Year}</td>
                <td>${book.Publisher}</td>
                <td>${book.ISBN}</td>
                <td>${book.Pages}</td>
                <td>${book.Notes [0]? book.Notes.join('; ') : 'no additional notes'}</td>
            </tr>`
      );
    });
  })
  .catch((error) => console.log(error));


kingBooksEl.addEventListener("click", (e) => {
  const bid = e.target.parentElement.dataset.bookid;
  fetch("https://stephen-king-api.onrender.com/api/book/" + bid)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

  /*
function load5s() { 
  time += 1; 
  if (time <5) { 
    console.
  }
}

*/
