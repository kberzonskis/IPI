/*
const kingBooksEl = document.getElementById("king-books");
const loaderEl = document.getElementById("loader");
const tableEl = document.getElementById("table");

const blurBg = document.createElement('div')
blurBg.id = "blur-bg"

const modalWindow = document.createElement("div");
modalWindow.id = "modal";

const closeBtn = document.createElement("div");
closeBtn.classList.add("close-modal");
closeBtn.textContent = "x";

const contentEl = document.createElement("div");
contentEl.classList.add("api-content");

modalWindow.appendChild(closeBtn);
modalWindow.appendChild(contentEl);
blurBg.appendChild(modalWindow)

tableEl.classList.add("hide");
loaderEl.classList.add("show");

fetch("https://stephen-king-api.onrender.com/api/books")
  .then((resp) => resp.json())
  .then((data) => {
    loaderEl.classList.remove("show");
    tableEl.classList.remove("hide");
    data.data.forEach((book) => {
      kingBooksEl.insertAdjacentHTML(
        "beforeend",
        `<tr data-bookid="${book.id}">
                <td>${book.Title}</td>
                <td>${book.Year}</td>
                <td>${book.Publisher}</td>
                <td>${book.ISBN}</td>
                <td>${book.Pages}</td>
                <td>${
                  book.Notes[0] ? book.Notes.join("; ") : "No additional notes"
                }</td>
            </tr>`
      );
    });
  })
  .catch((error) => console.log(error));

kingBooksEl.addEventListener("click", (e) => {
  const tr = e.target.parentElement;
  const villainsRowEl = document.getElementById("villains-row");
  if (villainsRowEl && villainsRowEl != tr) {
    kingBooksEl.removeChild(villainsRowEl);
  }
  if (villainsRowEl != tr) {
    const bid = tr.dataset.bookid;
    fetch("https://stephen-king-api.onrender.com/api/book/" + bid)
      .then((res) => res.json())
      .then((data) => {
        tr.insertAdjacentHTML(
          "afterend",
          `<tr id="villains-row">
        <td colspan="2">${data.data.Title}</td>
        <td colspan="4">${data.data.villains
          .map((villain) => `<a href="${villain.url}">${villain.name}</a>`)
          .join("<br/>")}</td>
          </tr>`
        );


       const links = Array.from(document.getElementsByTagName("a"));
        links &&
          links.forEach((link) => {
            // console.log(link.href);
            link.addEventListener("click", (e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log(e.target);

              fetch(e.target.href)
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  contentEl.innerHTML = `
                  <h2>${data.data.name}</h2>
                  <p>Status: ${data.data.status}</p>
                  <ul>${data.data.books
                    .map((book) => `<li>${book.title}</li>`)
                    .join("")}</ul>
                  `;
                  console.log(contentEl);

                  document.body.appendChild(blurBg);

                });
            });
          });
      })
      .catch((err) => console.log(err));
  }
});

closeBtn.addEventListener('click', () => document.body.removeChild(blurBg))
document.addEventListener('keydown', (e) => {
  e.key=== "Escape"&& document.body.removeChild(blurBg)
  document.body.removeChild(blurBg)

}
)
*/


const kingBooksEl = document.getElementById("king-books");
const loaderEl = document.getElementById("loader");
const tableEl = document.getElementById("table");
 
const blurBg = document.createElement('div');
blurBg.id = 'blur-bg';
 
const modalWindow = document.createElement("div");
modalWindow.id = "modal";
 
const closeBtn = document.createElement("div");
closeBtn.classList.add("close-modal");
closeBtn.textContent = "x";
 
const contentEl = document.createElement("div");
contentEl.classList.add("api-content");
 
modalWindow.appendChild(closeBtn);
modalWindow.appendChild(contentEl);
blurBg.appendChild(modalWindow)
 
tableEl.classList.add("hide");
loaderEl.classList.add("show");
 
fetch("https://stephen-king-api.onrender.com/api/books")
  .then((resp) => resp.json())
  .then((data) => {
    loaderEl.classList.remove("show");
    tableEl.classList.remove("hide");
    data.data.forEach((book) => {
      kingBooksEl.insertAdjacentHTML(
        "beforeend",
        `<tr data-bookid="${book.id}">
                <td>${book.Title}</td>
                <td>${book.Year}</td>
                <td>${book.Publisher}</td>
                <td>${book.ISBN}</td>
                <td>${book.Pages}</td>
                <td>${
                  book.Notes[0] ? book.Notes.join("; ") : "No additional notes"
                }</td>
            </tr>`
      );
    });
  })
  .catch((error) => console.log(error));
 
kingBooksEl.addEventListener("click", (e) => {
  const tr = e.target.parentElement;
  const villainsRowEl = document.getElementById("villains-row");
  if (villainsRowEl && villainsRowEl != tr) {
    kingBooksEl.removeChild(villainsRowEl);
  }
  if (villainsRowEl != tr) {
    const bid = tr.dataset.bookid;
    fetch("https://stephen-king-api.onrender.com/api/book/" + bid)
      .then((res) => res.json())
      .then((data) => {
        tr.insertAdjacentHTML(
          "afterend",
          `<tr id="villains-row">
        <td colspan="2">${data.data.Title}</td>
        <td colspan="4">${data.data.villains
          .map((villain) => `<a href="${villain.url}">${villain.name}</a>`)
          .join("<br/>")}</td>
          </tr>`
        );
        const links = Array.from(document.getElementsByTagName("a"));
        links &&
          links.forEach((link) => {
            // console.log(link.href);
            link.addEventListener("click", (e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log(e.target);
 
              fetch(e.target.href)
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  contentEl.innerHTML = `
                  <h2>${data.data.name}</h2>
                  <p>Status: ${data.data.status === "Deceased" ? '😿' : '😎'}</p>
                  <ul>${data.data.books
                    .map((book) => `<li>${book.title}</li>`)
                    .join("")}</ul>
                  `;
                  console.log(contentEl);
 
                  document.body.appendChild(blurBg);
                });
            });
          });
      })
      .catch((err) => console.log(err));
  }
});
closeBtn.addEventListener('click', () => document.body.removeChild(blurBg));
window.addEventListener('keydown', (e) => {
  e.key === "Escape" && document.body.removeChild(blurBg)
});
 