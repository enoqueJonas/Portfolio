const header = document.querySelector('.header');
const closeMenuToolbar = document.querySelector('.close-menu-toolbar');
const navMenu = document.querySelector('.nav-menu');
const btnBurgerMenu = document.querySelector('.burger');
const btnCloseMenu = document.querySelector('.close-menu');
const navItemPortfolio = document.querySelector('#nav-item-portfolio');
const navItemAbout = document.querySelector('#nav-item-about');
const navItemContact = document.querySelector('#nav-item-contact');
let projectCardsArray = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'works-item-image-1',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: '#',
    linkToSource: '#',
    canopy: 'Canopy',
    type: 'Back End Dev',
    year: '2022'
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
    year: '2022'
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
    year: '2022'
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
    year: '2022'
  }
]

//Section that holds all of the project cards
let projectCardsSection = document.querySelector('#works');

function displayProjectCards() {
  let counter = 0; 
  //Adding the project cards info dynamically 
  for (const project of projectCardsArray) {
    counter++;
    //Creating <p> that holds project year
    let projectYear_P = document.createElement('p');
    projectYear_P.className = 'works-item-project-info-year';
    projectYear_P.textContent = project.year;

    //Creating <img> that holds the bullet point for stylish purpose 
    let projectInfoPoint_Img2 = document.createElement('img');
    projectInfoPoint_Img2.className = 'works-item-project-info-point-2 works-item-project-info-items';
    projectInfoPoint_Img2.src = 'img/Counter.png'
    projectInfoPoint_Img2.alt = '...';

    //Creating <span> and <p> that hold project type
    let projectType_P = document.createElement('p');
    project.className = 'works-item-project-info-type';
    let projectType_Span = document.createElement('span')
    projectType_Span.textContent = project.type;
    projectType_P.appendChild(projectType_Span);

    //Creating <img> that holds the bullet point for stylish purpose 
    let projectInfoPoint_Img1 = document.createElement('img');
    projectInfoPoint_Img1.className = 'works-item-project-info-point-1 works-item-project-info-items';
    projectInfoPoint_Img1.src = 'img/Counter.png'
    projectInfoPoint_Img1.alt = '...';

    //Creating <span> and <p> that holds project Canopy 
    let projectCanopy_P = document.createElement('p');
    projectCanopy_P.classList = 'works-item-project-info-canopy works-item-project-info-items';
    let projectCanopy_Span = document.createElement('span');
    projectCanopy_Span.textContent = project.canopy;
    projectCanopy_P.appendChild(projectCanopy_Span);

    //Creating <div> that holds all of the above elements that are the project info and appending its children
    let projectInfoFrame_Div = document.createElement('div');
    projectInfoFrame_Div.className = 'works-item-project-info-frame';
    projectInfoFrame_Div.appendChild(projectYear_P)
    projectInfoFrame_Div.appendChild(projectInfoPoint_Img2)
    projectInfoFrame_Div.appendChild(projectInfoPoint_Img1)
    projectInfoFrame_Div.appendChild(projectType_P)
    projectInfoFrame_Div.appendChild(projectCanopy_P)

    //Creating <p> that holds the project description 
    let projectDescription_P = document.createElement('p');
    projectDescription_P.innerText = project.description;
    projectDescription_P.className = 'works-item-project-description';

    //Creating <li>'s and <span>'s that hold project tecnologies 
    let html_Li = document.createElement('li');
    let css_Li = document.createElement('li');
    let javaScript_Li = document.createElement('li');
    html_Li.className = 'works-item-project-tecnologies-item works-item-project-item-html';
    let html_Span = document.createElement('span');
    html_Span.textContent = project.technologies[0];
    html_Li.appendChild(html_Span);

    css_Li.className = 'works-item-project-tecnologies-item works-item-project-item-css';
    let css_Span = document.createElement('span')
    css_Span.textContent = project.technologies[1];
    css_Li.appendChild(css_Span);

    javaScript_Li.className = 'works-item-project-tecnologies-item works-item-project-item-css';
    let javaScript_Span = document.createElement('span');
    javaScript_Span.textContent = project.technologies[2];
    javaScript_Li.appendChild(javaScript_Span);

    //Creating the <ul> that holds all of the above <li> and appending its children
    let projectTecnologies_Ul = document.createElement('ul');
    projectTecnologies_Ul.className = 'works-item-project-tecnologies';
    projectTecnologies_Ul.appendChild(html_Li);
    projectTecnologies_Ul.appendChild(css_Li);
    projectTecnologies_Ul.appendChild(javaScript_Li);

    //Creating the card <div> that holds the button and the <button>
    let porjectButton_Btn = document.createElement('button');
    porjectButton_Btn.textContent = 'See Project'
    porjectButton_Btn.className = 'works-item-project-action-button';
    
    let projectButton_Div = document.createElement('div');
    projectButton_Div.id = 'works-item-project-action';
    projectButton_Div.appendChild(porjectButton_Btn);

    //Creating the <div> that is the project card
    let projectCardInfoBlock_Div = document.createElement('div');
    projectCardInfoBlock_Div.className = 'works-item-info-block';
    projectCardInfoBlock_Div.appendChild(projectDescription_P);
    projectCardInfoBlock_Div.appendChild(projectTecnologies_Ul);
    projectCardInfoBlock_Div.appendChild(projectInfoFrame_Div);
    projectCardInfoBlock_Div.appendChild(projectButton_Div);

    //Creating the <div> that holds the image
    let projectImg_Div = document.createElement('div');
    projectImg_Div.className = project.img + ' works-item-image'

    //Creating the project card main <div> that holds all the card info and appending its children
    let projectCard_Div = document.createElement('div');
    projectCard_Div.className = 'works-item works-item-'+counter;
    projectCard_Div.appendChild(projectImg_Div);
    projectCard_Div.appendChild(projectCardInfoBlock_Div);

    //Appending the current project card int the section that holds all project cards 
    projectCardsSection.appendChild(projectCard_Div);
  }
}

function toggleMobileMenu() {
  header.classList.toggle('active');
  closeMenuToolbar.classList.toggle('active');
  navMenu.classList.toggle('active');
  btnBurgerMenu.classList.toggle('active');
}

window.addEventListener('load', displayProjectCards);
navItemContact.addEventListener('click', toggleMobileMenu);
navItemAbout.addEventListener('click', toggleMobileMenu);
navItemPortfolio.addEventListener('click', toggleMobileMenu);
btnCloseMenu.addEventListener('click', toggleMobileMenu);
btnBurgerMenu.addEventListener('click', toggleMobileMenu);
