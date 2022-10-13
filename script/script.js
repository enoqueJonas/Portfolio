const header = document.querySelector('.header');
const closeMenuToolbar = document.querySelector('.close-menu-toolbar');
const navMenu = document.querySelector('.nav-menu');
const btnBurgerMenu = document.querySelector('.burger');
const btnCloseMenu = document.querySelector('.close-menu');
const navItemPortfolio = document.querySelector('#nav-item-portfolio');
const navItemAbout = document.querySelector('#nav-item-about');
const navItemContact = document.querySelector('#nav-item-contact');
const btnCloseCardPopup = document.querySelector('.close-card-popup');

// Section that holds all of the project cards
const projectCardsSection = document.querySelector('#works');

const cardsContainerPopupDiv = document.querySelector('.projects-popup');
const projectCardsArray = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'works-item-image-1',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: '#',
    linkToSource: '#',
    canopy: 'Canopy',
    type: 'Back End Dev',
    year: '2022',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'works-item-image-2',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: '#',
    linkToSource: '#',
    canopy: 'Canopy',
    type: 'Back End Dev',
    year: '2022',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'works-item-image-3',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: '#',
    linkToSource: '#',
    canopy: 'Canopy',
    type: 'Back End Dev',
    year: '2022',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'works-item-image-4',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: '#',
    linkToSource: '#',
    canopy: 'Canopy',
    type: 'Back End Dev',
    year: '2022',
  },
];

function toggleProjectCardsPopup() {
  cardsContainerPopupDiv.classList.toggle('active-popup');
}

function toggleMobileMenu() {
  header.classList.toggle('active');
  closeMenuToolbar.classList.toggle('active');
  navMenu.classList.toggle('active');
  btnBurgerMenu.classList.toggle('active');
}

function displayProjectCards() {
  // Adding the project cards info dynamically
  for (const project of projectCardsArray) {
    // Creating <p> that holds project year
    const projectYearP = document.createElement('p');
    projectYearP.className = 'works-item-project-info-year';
    projectYearP.textContent = project.year;

    // Creating <img> that holds the bullet point for stylish purpose
    const projectInfoPointImg2 = document.createElement('img');
    projectInfoPointImg2.className = 'works-item-project-info-point-2 works-item-project-info-items';
    projectInfoPointImg2.src = 'img/Counter.png';
    projectInfoPointImg2.alt = '...';

    // Creating <span> and <p> that hold project type
    const projectTypeP = document.createElement('p');
    project.className = 'works-item-project-info-type';
    const projectTypeSpan = document.createElement('span');
    projectTypeSpan.textContent = project.type;
    projectTypeP.appendChild(projectTypeSpan);

    // Creating <img> that holds the bullet point for stylish purpose
    const projectInfoPointImg1 = document.createElement('img');
    projectInfoPointImg1.className = 'works-item-project-info-point-1 works-item-project-info-items';
    projectInfoPointImg1.src = 'img/Counter.png';
    projectInfoPointImg1.alt = '...';

    // Creating <span> and <p> that holds project Canopy
    const projectCanopyP = document.createElement('p');
    projectCanopyP.classList = 'works-item-project-info-canopy works-item-project-info-items';
    const projectCanopySpan = document.createElement('span');
    projectCanopySpan.textContent = project.canopy;
    projectCanopyP.appendChild(projectCanopySpan);

    // Creating <div> that holds all of the above
    // elements that are the project info and appending its children
    let projectInfoFrameDiv = '';
    projectInfoFrameDiv = document.createElement('div');
    projectInfoFrameDiv.className = 'works-item-project-info-frame';
    projectInfoFrameDiv.appendChild(projectYearP);
    projectInfoFrameDiv.appendChild(projectInfoPointImg2);
    projectInfoFrameDiv.appendChild(projectInfoPointImg1);
    projectInfoFrameDiv.appendChild(projectTypeP);
    projectInfoFrameDiv.appendChild(projectCanopyP);

    // Creating <p> that holds the project description
    let projectDescriptionP = '';
    projectDescriptionP = document.createElement('p');
    projectDescriptionP.innerText = project.description;
    projectDescriptionP.className = 'works-item-project-description';

    // Creating <li>'s and <span>'s that hold project tecnologies
    const htmlLi = document.createElement('li');
    const cssLi = document.createElement('li');
    const javaScriptLi = document.createElement('li');
    htmlLi.className = 'works-item-project-tecnologies-item works-item-project-item-html';
    const htmlSpan = document.createElement('span');
    htmlSpan.textContent = project.technologies[0];
    htmlLi.appendChild(htmlSpan);

    cssLi.className = 'works-item-project-tecnologies-item works-item-project-item-css';
    const cssSpan = document.createElement('span');
    cssSpan.textContent = project.technologies[1];
    cssLi.appendChild(cssSpan);

    javaScriptLi.className = 'works-item-project-tecnologies-item works-item-project-item-css';
    const javaScriptSpan = document.createElement('span');
    javaScriptSpan.textContent = project.technologies[2];
    javaScriptLi.appendChild(javaScriptSpan);

    // Creating the <ul> that holds all of the above <li> and appending its children
    const projectTecnologiesUl = document.createElement('ul');
    projectTecnologiesUl.className = 'works-item-project-tecnologies';
    projectTecnologiesUl.appendChild(htmlLi);
    projectTecnologiesUl.appendChild(cssLi);
    projectTecnologiesUl.appendChild(javaScriptLi);

    // Creating the card <div> that holds the button and the <button>
    const porjectButtonBtn = document.createElement('button');
    porjectButtonBtn.textContent = 'See Project';
    porjectButtonBtn.className = 'works-item-project-action-button';
    porjectButtonBtn.addEventListener('click', toggleProjectCardsPopup);

    const projectButtonDiv = document.createElement('div');
    projectButtonDiv.id = 'works-item-project-action';
    projectButtonDiv.appendChild(porjectButtonBtn);

    // Creating the <div> that is the project card
    const projectCardInfoBlockDiv = document.createElement('div');
    projectCardInfoBlockDiv.className = 'works-item-info-block';
    projectCardInfoBlockDiv.appendChild(projectDescriptionP);
    projectCardInfoBlockDiv.appendChild(projectTecnologiesUl);
    projectCardInfoBlockDiv.appendChild(projectInfoFrameDiv);
    projectCardInfoBlockDiv.appendChild(projectButtonDiv);

    // Creating the <div> that holds the image
    const projectImgDiv = document.createElement('div');
    projectImgDiv.className = `${project.img} works-item-image`;

    // Creating the project card main <div> that holds all the card info and appending its children
    const projectCardDiv = document.createElement('div');
    projectCardDiv.className = `works-item works-item-${projectCardsArray.entries()}`;
    projectCardDiv.appendChild(projectImgDiv);
    projectCardDiv.appendChild(projectCardInfoBlockDiv);

    // Appending the current project card int the section that holds all project cards
    projectCardsSection.appendChild(projectCardDiv);
  }
}

btnCloseCardPopup.addEventListener('click', toggleProjectCardsPopup);
window.addEventListener('load', displayProjectCards);
navItemContact.addEventListener('click', toggleMobileMenu);
navItemAbout.addEventListener('click', toggleMobileMenu);
navItemPortfolio.addEventListener('click', toggleMobileMenu);
btnCloseMenu.addEventListener('click', toggleMobileMenu);
btnBurgerMenu.addEventListener('click', toggleMobileMenu);
