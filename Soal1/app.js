const projects = [
  {
    img: "./assets/content3/img2.png",
    date: "App Design - June 20, 2022",
    title: "Redesign Channel Website Landing Page",
  },
  {
    img: "./assets/content3/img3.png",
    date: "App Design - June 20, 2022",
    title: "New Locator App For a New Company",
  },
  {
    img: "./assets/content3/img4.png",
    date: "App Design - June 20, 2022",
    title: "Rental Rooms Web App Platform",
  },
  {
    img: "./assets/content3/img5.png",
    date: "App Design - June 20, 2022",
    title: "Calendar App for Big SASS Company",
  },
];

const solutions = [
  {
    img: "./assets/content5/uiux.png",
    title: "UI/UX Design",
    subtitle: "Sometimes features require a short description",
  },
  {
    img: "./assets/content5/logoDesign.png",
    title: "Logo Branding",
    subtitle: "Sometimes features require a short description",
  },
  {
    img: "./assets/content5/appDesign.png",
    title: "App Design",
    subtitle: "Sometimes features require a short description",
  },
  {
    img: "./assets/content5/websiteDesign.png",
    title: "Website Design",
    subtitle: "Sometimes features require a short description",
  },
];

$(document).ready(function () {
  projects.forEach((project) => {
    $("#right").append(`
      <div class="card">
        <img src="${project.img}" alt="${project.title}" class="image-right">
        <div class="subtitle">${project.date}</div>
        <div class="title">${project.title}</div>
      </div>
    `);
  });
});

$(document).ready(function () {
  solutions.forEach((project) => {
    $("#solutions").append(`
      <div class="solution-card">
        <img src="${project.img}" alt="${project.title}" class="solution-image">
        <div class="title">${project.title}</div>
        <div class="subtitle">${project.subtitle}</div>
      </div>
    `);
  });
});
