// import "./styles.css";

// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];
  
  // Part 1:
  const mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = "var(--main-bg)";
  
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  
  mainEl.classList.add("flex-ctr");
  
  // Part 2:
  const topMenuEl = document.querySelector("#top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  // Part 3:
  menuLinks.forEach((link) => {
    const newLink = document.createElement("a");
    newLink.href = link.href;
    newLink.textContent = link.text;
    topMenuEl.appendChild(newLink);
  });
  
  // Part 4: Adding Interactivity
  