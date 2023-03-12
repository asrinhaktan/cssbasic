const searchForm = document.querySelector(".search-form");
const navbar = document.querySelector(".navbar");

/*! buttons */
const searchBtn = document.querySelector("#search-btn");

const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click",function() {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)){
            searchForm.classList.remove("active");
        }
    });
});

menuBtn.addEventListener("click",function() {
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)){
            navbar.classList.remove("active");
        }
    });
});

const aboutSectionContent = document.querySelector("#about-section-content");

aboutLink.addEventListener("click", function() {
  // about section'un görünürlüğünü toggle et
  aboutSection.classList.toggle("active");
  // about section'un içeriğini değiştir
  aboutSectionContent.innerHTML = "hakkimizda";
  // about section'u açarken navbar'ın kapatılmasını sağla
  navbar.classList.remove("active");
});



