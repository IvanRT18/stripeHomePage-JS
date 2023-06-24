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

linksBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const tempPage = sublinks.find((link) => link.page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add("show");
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // OPTIONAL
      let columns = "col-2";
      if (links.length === 3) {
        columns = "col-3";
      }
      if (links.length > 3) {
        columns = "col-4";
      }
      submenu.innerHTML = `
      <section> 
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join("")}
      </div>
      </section>
      `;
    }
  });
});

hero.addEventListener("mouseover", (e) => {
  submenu.classList.remove("show");
});

nav.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
