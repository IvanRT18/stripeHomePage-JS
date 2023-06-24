import sublinks from "./data.js";

const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar-links");
const linksBtns = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

//Show sidebar
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

//Hide sidebar
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

//doble map anidado
sidebar.innerHTML = sublinks
  .map((sublink) => {
    const { links, page } = sublink;
    return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
${links
  .map((link) => {
    const { label, icon, url } = link;
    return `<a href="${url}"><i class="${icon}"></i>${label}</a>`;
  })
  .join("")}
    </article>
    </div>`;
  })
  .join("");
