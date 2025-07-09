
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

fetch("https://stephen-king-api.onrender.com/api/books")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);

    data.data.forEach((book) => {
      kingBooksEl.insertAdjacentHTML(
        "beforeend",
        `<tr>
                <td>${book.Title}</td>
                <td>${book.Year}</td>
                <td>${book.Publisher}</td>
                <td>${book.ISBN}</td>
                <td>${book.Pages}</td>
                <td>${book.Notes[0]}</td>
            </tr>`
      );
    });
  })
  .catch((error) => console.log(error));
