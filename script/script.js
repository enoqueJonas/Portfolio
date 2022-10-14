const header = document.querySelector('.header');
const closeMenuToolbar = document.querySelector('.close-menu-toolbar');
const navMenu = document.querySelector('.nav-menu');
const btnBurgerMenu = document.querySelector('.burger');
const btnCloseMenu = document.querySelector('.close-menu');
const navItemPortfolio = document.querySelector('#nav-item-portfolio');
const navItemAbout = document.querySelector('#nav-item-about');
const navItemContact = document.querySelector('#nav-item-contact');
const popupD = document.querySelector('.popup');
let buttonPressed = '';
const contactForm = document.querySelector('.contact-form');
const emailInput = document.querySelector('#email');
const error = document.querySelector('.error');

// Section that holds all of the project cards
const projectCardsSection = document.querySelector('#works');

const projectCardsArray = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img: 'works-item-image-1',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    linkToLive: '#',
    linkToSource: '#',
    canopy: 'Canopy',
    type: 'Back End Dev',
    year: '2011',
    id: 'card-1',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img: 'works-item-image-2',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    linkToLive: '#',
    linkToSource: '#',
    canopy: 'Canopy',
    type: 'Back End Dev',
    year: '2012',
    id: 'card-2',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img: 'works-item-image-3',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    linkToLive: '#',
    linkToSource: '#',
    canopy: 'Canopy',
    type: 'Back End Dev',
    year: '2013',
    id: 'card-3',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img: 'works-item-image-4',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    linkToLive: '#',
    linkToSource: '#',
    canopy: 'Canopy',
    type: 'Back End Dev',
    year: '2022',
    id: 'card-4',
  },
];

function displayProjectCardsPopup() {
  const projectsPopupDiv = document.createElement('div');
  projectCardsArray.forEach((project) => {
    if (buttonPressed === project.id) {
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
      projectTypeP.className = 'works-item-project-info-type';
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
      projectInfoFrameDiv.className = 'popup-project-info-frame';
      projectInfoFrameDiv.appendChild(projectCanopyP);
      projectInfoFrameDiv.appendChild(projectInfoPointImg1);
      projectInfoFrameDiv.appendChild(projectTypeP);
      projectInfoFrameDiv.appendChild(projectInfoPointImg2);
      projectInfoFrameDiv.appendChild(projectYearP);

      // creating the icon that closes the popup
      const projectPopupClose = document.createElement('img');
      projectPopupClose.className = 'close-card-popup';
      projectPopupClose.src = './img/Icon - Cancel.png';
      projectPopupClose.alt = 'cancel';
      projectPopupClose.addEventListener('click', () => {
        projectsPopupDiv.classList.toggle('active-popup');
        popupD.classList.toggle('active-popup');
      });

      // creating the title of the popup and appendibg its child
      const projectPopuopTitleDiv = document.createElement('div');
      const projectPopupTitleP = document.createElement('p');
      projectPopupTitleP.textContent = project.name;
      projectPopuopTitleDiv.className = 'popup-prject-title';
      projectPopuopTitleDiv.appendChild(projectPopupTitleP);
      projectPopuopTitleDiv.appendChild(projectPopupClose);

      // creating the <div> that holds the project header and appending its children
      const popupProjectHeaderDiv = document.createElement('div');
      popupProjectHeaderDiv.className = 'popup-project-header';
      popupProjectHeaderDiv.appendChild(projectPopuopTitleDiv);
      popupProjectHeaderDiv.appendChild(projectInfoFrameDiv);

      // Creating the <div> and <p> that hold the project description
      const projectPopupDescriptionP = document.createElement('p');
      const projectPopupDescriptionDiv = document.createElement('div');
      projectPopupDescriptionP.textContent = project.description;
      projectPopupDescriptionDiv.appendChild(projectPopupDescriptionP);
      projectPopupDescriptionDiv.className = 'project-popuop-description';

      // Creating <li>'s and <span>'s that hold project tecnologies
      const htmlLi = document.createElement('li');
      const cssLi = document.createElement('li');
      const javaScriptLi = document.createElement('li');
      htmlLi.className = 'works-item-project-tecnologies-item works-item-project-item-html';
      const htmlSpan = document.createElement('span');
      htmlLi.appendChild(htmlSpan);

      cssLi.className = 'works-item-project-tecnologies-item works-item-project-item-css';
      const cssSpan = document.createElement('span');
      cssLi.appendChild(cssSpan);

      javaScriptLi.className = 'works-item-project-tecnologies-item works-item-project-item-css';
      const javaScriptSpan = document.createElement('span');
      javaScriptLi.appendChild(javaScriptSpan);

      // Creating the <ul> that holds all of the above <li> and appending its children
      const projectTecnologiesUl = document.createElement('ul');
      projectTecnologiesUl.className = 'works-item-project-tecnologies-1 works-item-project-tecnologies';
      projectTecnologiesUl.appendChild(htmlLi);
      projectTecnologiesUl.appendChild(cssLi);
      projectTecnologiesUl.appendChild(javaScriptLi);

      // Creating <li>'s and <span>'s that hold project tecnologies
      const bootstrapLi = document.createElement('li');
      const githubLi = document.createElement('li');
      const rubyLi = document.createElement('li');
      githubLi.className = 'works-item-project-tecnologies-item works-item-project-item-html';
      const githubSpan = document.createElement('span');
      githubLi.appendChild(githubSpan);

      rubyLi.className = 'works-item-project-tecnologies-item works-item-project-item-css';
      const rubySpan = document.createElement('span');
      rubyLi.appendChild(rubySpan);

      bootstrapLi.className = 'works-item-project-tecnologies-item works-item-project-item-css';
      const bootstrapSpan = document.createElement('span');
      bootstrapLi.appendChild(bootstrapSpan);
      [
        htmlSpan.textContent,
        cssSpan.textContent,
        javaScriptSpan.textContent,
        githubSpan.textContent,
        rubySpan.textContent,
        bootstrapSpan.textContent,
      ] = project.technologies;

      // Creating the <ul> that holds all of the above <li> and appending its children
      const projectTecnologiesUl2 = document.createElement('ul');
      projectTecnologiesUl2.className = 'works-item-project-tecnologies-2 works-item-project-tecnologies';
      projectTecnologiesUl2.appendChild(githubLi);
      projectTecnologiesUl2.appendChild(rubyLi);
      projectTecnologiesUl2.appendChild(bootstrapLi);

      // Creating the buttons
      const btnPopupSeeLive = document.createElement('button');
      btnPopupSeeLive.className = 'btn-see-live works-item-project-action-button';
      const btnPopupSeeLiveSpan = document.createElement('span');
      btnPopupSeeLiveSpan.textContent = 'See Live';
      const btnPopupSeeLiveImg = document.createElement('img');
      btnPopupSeeLiveImg.src = './img/icon-GitHub.png';
      btnPopupSeeLiveImg.alt = 'github';
      btnPopupSeeLive.appendChild(btnPopupSeeLiveSpan);
      btnPopupSeeLive.appendChild(btnPopupSeeLiveImg);

      const btnPopupSeeSource = document.createElement('button');
      btnPopupSeeSource.className = 'btn-see-source works-item-project-action-button';
      const btnPopupSeeSourceSpan = document.createElement('span');
      btnPopupSeeSourceSpan.textContent = 'See Source';
      const btnPopupSeeSourceImg = document.createElement('img');
      btnPopupSeeSourceImg.src = './img/Icon - Export.svg';
      btnPopupSeeSourceImg.alt = 'export';
      btnPopupSeeSource.appendChild(btnPopupSeeSourceSpan);
      btnPopupSeeSource.appendChild(btnPopupSeeSourceImg);

      // creating the <div> that holds the buttons and appending its children
      const projectPopupAction = document.createElement('div');
      projectPopupAction.className = 'project-popup-action';
      projectPopupAction.appendChild(btnPopupSeeLive);
      projectPopupAction.appendChild(btnPopupSeeSource);

      // <div> thats holds the ul's and the action <div>
      const projectPopupTecnologies = document.createElement('div');
      projectPopupTecnologies.className = 'project-popup-tecnologies';
      projectPopupTecnologies.appendChild(projectPopupAction);
      projectPopupTecnologies.appendChild(projectTecnologiesUl2);
      projectPopupTecnologies.appendChild(projectTecnologiesUl);

      // creating the div popup details
      const projectPopupDetails = document.createElement('div');
      projectPopupDetails.className = 'projects-popup-details';
      projectPopupDetails.appendChild(projectPopupDescriptionDiv);
      projectPopupDetails.appendChild(projectPopupTecnologies);

      // Creating the <div> that holds the img
      const projectPopupImg = document.createElement('div');
      projectPopupImg.className = `popup-project-img ${project.img}`;

      // Creating the main container that holdds the popup
      projectsPopupDiv.className = 'projects-popup';
      projectsPopupDiv.classList.toggle('active-popup');
      projectsPopupDiv.appendChild(popupProjectHeaderDiv);
      projectsPopupDiv.appendChild(projectPopupImg);
      projectsPopupDiv.appendChild(projectPopupDetails);

      projectCardsSection.appendChild(projectsPopupDiv);
      popupD.classList.toggle('active-popup');
    }
  });
}

const getButtonPressed = (e) => {
  buttonPressed = e.target.id;
  displayProjectCardsPopup();
};

function toggleMobileMenu() {
  header.classList.toggle('active');
  closeMenuToolbar.classList.toggle('active');
  navMenu.classList.toggle('active');
  btnBurgerMenu.classList.toggle('active');
}

function displayProjectCards() {
  // Adding the project cards info dynamically
  projectCardsArray.forEach((project, index) => {
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
    projectTypeP.className = 'works-item-project-info-type';
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

    // creating the <h2> that holds the title
    const projectInfoTitle = document.createElement('h2');
    projectInfoTitle.textContent = project.name;
    projectInfoTitle.className = 'works-item-title';

    // Creating <div> that holds all of the above
    // elements that are the project info and appending its children
    let projectInfoFrameDiv = '';
    projectInfoFrameDiv = document.createElement('div');
    projectInfoFrameDiv.className = 'works-item-project-info-frame';
    projectInfoFrameDiv.appendChild(projectCanopyP);
    projectInfoFrameDiv.appendChild(projectCanopyP);
    projectInfoFrameDiv.appendChild(projectInfoPointImg1);
    projectInfoFrameDiv.appendChild(projectTypeP);
    projectInfoFrameDiv.appendChild(projectInfoPointImg2);
    projectInfoFrameDiv.appendChild(projectYearP);

    // Creating <p> that holds the project description
    let projectDescriptionP = '';
    projectDescriptionP = document.createElement('p');
    projectDescriptionP.innerText = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
    projectDescriptionP.className = 'works-item-project-description';

    // Creating <li>'s and <span>'s that hold project tecnologies
    const htmlLi = document.createElement('li');
    const cssLi = document.createElement('li');
    const javaScriptLi = document.createElement('li');
    htmlLi.className = 'works-item-project-tecnologies-item works-item-project-item-html';
    const htmlSpan = document.createElement('span');
    htmlLi.appendChild(htmlSpan);

    cssLi.className = 'works-item-project-tecnologies-item works-item-project-item-css';
    const cssSpan = document.createElement('span');
    cssLi.appendChild(cssSpan);

    javaScriptLi.className = 'works-item-project-tecnologies-item works-item-project-item-css';
    const javaScriptSpan = document.createElement('span');
    javaScriptLi.appendChild(javaScriptSpan);
    [
      htmlSpan.textContent,
      cssSpan.textContent,
      javaScriptSpan.textContent,
    ] = project.technologies;

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
    // porjectButtonBtn.addEventListener('click', displayProjectCardsPopup);
    porjectButtonBtn.id = `card-${index + 1}`;
    porjectButtonBtn.addEventListener('click', getButtonPressed);

    const projectButtonDiv = document.createElement('div');
    projectButtonDiv.id = 'works-item-project-action';
    projectButtonDiv.appendChild(porjectButtonBtn);

    // Creating the <div> that holds the title and the info frame
    const projectCardInfo = document.createElement('div');
    projectCardInfo.className = 'works-item-project-info';
    projectCardInfo.appendChild(projectInfoTitle);
    projectCardInfo.appendChild(projectInfoFrameDiv);

    // Creating the <div> that is the project card
    const projectCardInfoBlockDiv = document.createElement('div');
    projectCardInfoBlockDiv.className = 'works-item-info-block';
    projectCardInfoBlockDiv.appendChild(projectDescriptionP);
    projectCardInfoBlockDiv.appendChild(projectTecnologiesUl);
    projectCardInfoBlockDiv.appendChild(projectCardInfo);
    projectCardInfoBlockDiv.appendChild(projectButtonDiv);

    // Creating the <div> that holds the image
    const projectImgDiv = document.createElement('div');
    projectImgDiv.className = `${project.img} works-item-image`;

    // Creating the project card main <div> that holds all the card info and appending its children
    const projectCardDiv = document.createElement('div');
    projectCardDiv.className = `works-item works-item-${index}`;
    projectCardDiv.appendChild(projectImgDiv);
    projectCardDiv.appendChild(projectCardInfoBlockDiv);
    projectCardDiv.id = project.id;

    // Appending the current project card int the section that holds all project cards
    projectCardsSection.appendChild(projectCardDiv);
  });
}

emailInput.addEventListener('input', (event) => {
  event.preventDefault();
});

contactForm.addEventListener('submit', (event) => {
  const regex = new RegExp('/^[a-z]+$/g');
  // console.log(emailInput.innerHTML);
  if (regex.test(emailInput.textContent)) {
    // console.log('Enter');
    error.textContent = 'Your email has to be lower case!';
    error.classList.add('active');
    event.preventDefault();
    // console.log('ENTER');
  } else {
    error.classList.remove('active');
  }
});
window.addEventListener('load', displayProjectCards);
navItemContact.addEventListener('click', toggleMobileMenu);
navItemAbout.addEventListener('click', toggleMobileMenu);
navItemPortfolio.addEventListener('click', toggleMobileMenu);
btnCloseMenu.addEventListener('click', toggleMobileMenu);
btnBurgerMenu.addEventListener('click', toggleMobileMenu);
