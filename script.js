// Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var img = document.getElementById("img-popup");
var title = document.getElementById("title-popup");
var paragraph = document.getElementById("paragraph-popup");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var btnpopup = document.getElementById("btn-popup");
var menuitems = document.getElementById("menu-items");
var checkbox = document.getElementById("navi-toggle");

// Close Popup Event
closePopup.onclick = function () {
  overlay.style.display = "none";
  popup.style.display = "none";
};

// Show Overlay and Popup
button1.onclick = function () {
  overlay.style.display = "block";
  popup.style.display = "block";
  img.src = "img/Book1-1.jpg";
  btnpopup.href = "https://www.amazon.com/gp/product/1491952024/";
  paragraph.innerHTML =
    "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.";
  title.innerHTML =
    "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language";
};
button2.onclick = function () {
  overlay.style.display = "block";
  popup.style.display = "block";
  img.src = "img/Book2-1.jpg";
  btnpopup.href =
    "https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/172004399X/ref=d_pd_sbs_sccl_2_3/130-5751593-0029724?pd_rd_w=m9yJh&content-id=amzn1.sym.3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=MN81G3T0MAX9FR9FAENV&pd_rd_wg=XsyuS&pd_rd_r=c3fff6b6-0e60-41bd-b038-2e16c81b5390&pd_rd_i=172004399X&psc=1";
  paragraph.innerHTML =
    'In "The Road to React" you will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step. While you create the React application, every chapter will introduce you to a new React key feature. However, there is more than only the fundamentals: The book dives into related topics (e.g. React with TypeScript, Testing, Performance Optimizations) and advanced feature implementations like client- and server-side searching. At the end of the book, you will have a fully working deployed React application.';
  title.innerHTML =
    "The Road to React: Your journey to master plain yet pragmatic React.js";
};
button3.onclick = function () {
  overlay.style.display = "block";
  popup.style.display = "block";
  img.src = "img/Book3-1.jpg";
  btnpopup.href =
    "https://www.amazon.fr/dp/1491941952?psc=1&th=1&linkCode=gs2&tag=vhpoet0ca-21";
  paragraph.innerHTML =
    "Perfect for beginners familiar with programming basics, this hands-on guide provides an easy introduction to Go, the general-purpose programming language from Google. Author Caleb Doxsey covers the languageâ s core features with step-by-step instructions and exercises in each chapter to help you practice what you learn. Go is a general-purpose programming language with a clean syntax and advanced features, including concurrency. This book provides the one-on-one support you need to get started with the language, with short, easily digestible chapters that build on one another. By the time you finish this book, not only will you be able to write real Go programs, you'll be ready to tackle advanced techniques.";
  title.innerHTML = "Introducing Go: Build Reliable, Scalable Programs";
};

// close menu
menuitems.onclick = function () {
  checkbox.checked = false;
};
