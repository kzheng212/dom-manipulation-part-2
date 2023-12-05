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
const menuLinks = [
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

// P2.C4:
const topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

// e = event
function handleTopMenuClick(e) {
  e.preventDefault();
  // If selected element is not an anchor tag
  if (e.target.tagName !== "A") return;
  else {
    console.log(e.target.text);
    isActive(e);
  }
}

function isActive(e) {
  // If anchor tag does not have a .active
  if (!e.target.classList.contains("active")) {
    // Loops thru every anchor link in topMenu
    topMenuLinks.forEach(function (link) {
      // Removes ".active for all links in topMenu"
      link.classList.remove("active");
    });
    // Adds ".active to selected link"
    e.target.classList.add("active");
    // O = Order List
    // For P2.C5.O1:
    // Check if anchor tag in topMenu has subLinks,
    //  If so, Toggle subLinks based on active & inactive states
    //  Else, Don't Toggle
    toggleSubLinks(e);
  } else {
    // Removes ".active from the current selection that has a .active"
    e.target.classList.remove("active");
    toggleSubLinks(e);
  }
}

topMenuEl.addEventListener("click", handleTopMenuClick);

// P2.C5:

// Checks if any of the topMenu Anchor Links has an Attribute of subLinks in object
function toggleSubLinks(e) {
  // Gather Object that shares the same value (where obj.text === TextContent)
  // Based on topMenu Anchor Link that was Selection
  const tempObj = menuLinks.find((obj) => obj.text === e.target.text);
  console.log(tempObj);
  // If subLinks key exist in tempObj && selected anchor tag has a .active, show subMenuEl
  if ("subLinks" in tempObj && e.target.classList.contains("active")) {
    subMenuEl.style.top = "100%";
    // Pass tempObj to buildSubMenu
    buildSubMenu(tempObj);
  }
  // Otherwise, don't show the subMenuEl if subLinks key does not exist
  // Ex. const menuLinks = [{ text: "about", href: "/about" }, ...];
  else {
    subMenuEl.style.top = "0";
    // Generates HeadingOne with <h1>About</h1>
    headingOneGenerator(e);
  }
}

function buildSubMenu(tempObj) {
  if (subMenuEl.children.length > 0) {
    // Clears All Existing Content of subMenuEl using forEach
    // We use forEach for removal here instead of innerHTML
    // for memory safety reasons
    clearSubMenu();
  }
  // Populate the subMenu with subLinks for each respective topMenuLinks
  //  with a .active
  tempObj.subLinks.forEach((obj) => {
    const newSubLink = document.createElement("a");
    newSubLink.href = obj.href;
    newSubLink.textContent = obj.text;
    subMenuEl.appendChild(newSubLink);
  });
}

function clearSubMenu() {
  while (subMenuEl.firstChild) {
    subMenuEl.removeChild(subMenuEl.firstChild);
  }
}

subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  // If not a subLink
  if (!e.target.tagName === "A") return;
  // If subLink:
  else {
    console.log(e.target.text);
    // Hides subMenuEl
    subMenuEl.style.top = "0";
    // Removes .active in the collection of topMenuLinks
    topMenuLinks.forEach((link) => link.classList.remove("active"));
    /* Updates contents of mainEL with an h1 containing clicked upon 
    subMenuEl anchor element text */
    headingOneGenerator(e);
  }
});

function headingOneGenerator(e) {
  const newHeadingOneContent = e.target.textContent;
  // console.log(newHeadingOneContent);
  /* Only topMenuLinks without subLinks "In this case: about"
  will print out topMenuLinks textContent with a captialized first 
  letter of the first word */
  if (newHeadingOneContent === "about") {
    const modifiedHeadingOneContent =
      newHeadingOneContent[0].toUpperCase() + newHeadingOneContent.slice(1);
    console.log(modifiedHeadingOneContent);
    mainEl.querySelector("h1").textContent = modifiedHeadingOneContent;
  }
  // SubLinks will print lowercase textContent into h1 tag
  else {
    mainEl.querySelector("h1").textContent = newHeadingOneContent;
  }
}
