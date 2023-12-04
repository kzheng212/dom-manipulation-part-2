// import "./styles.css";

// DOM - Part One

// Naming Section + Change Notation

// (P# --> P1)
// Change # (C#)

// P1 - Menu data structure
// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];

// P2 - Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// el after every component (main, topMenu, subMenu), stands for element

// P1.C1:
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");

// P1.C2:
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// P1.C3:
menuLinks.forEach((link) => {
  const newLink = document.createElement("a");
  newLink.href = link.href;
  newLink.textContent = link.text;
  topMenuEl.appendChild(newLink);
});

// Part 2: Adding Interactivity

// Prior changes for Part 2 were to HTML & CSS

// P2.C3:
const subMenuEl = document.querySelector("#sub-menu");
// console.log(subMenuEl);
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

// Temp Changes
// P2.C3.T1
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// P2.C4
const topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

// e = event
function handleTopMenuClick(e) {
  e.preventDefault();
  if (e.target.tagName !== "A") return;
  else {
    console.log(e.target.text);
    isActive(e);
  }
}

function isActive(e) {
  if (!e.target.classList.contains("active")) {
    topMenuLinks.forEach(function (link) {
      // Removes ".active before selecting a new link"
      link.classList.remove("active");
    });
    // Adds ".active to selected link"
    e.target.classList.add("active");
  } else {
    // Removes ".active from the current selection that has a .active"
    e.target.classList.remove("active");
  }
}

topMenuEl.addEventListener("click", handleTopMenuClick);

// P2.C5

