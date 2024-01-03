// call to all sections of portfolio

const headerSection = document.querySelector('#header-section');
const heroSection = document.querySelector('#hero-section');
const aboutMeSection = document.querySelector('#about-me');
const contactFormSection = document.querySelector('#contactform');
const footerSection = document.querySelector('#footer-id');

// Open mobile popup menu

function displayPopUp() {
  const popUpMenu = document.querySelector('#popup-menu-id');
  popUpMenu.style.display = 'block';
  popUpMenu.style.right = 0;
}

// close mobile popup menu

function closePopUp() {
  const popUpMenu = document.querySelector('#popup-menu-id');
  popUpMenu.style.right = '-23em';
  popUpMenu.style.display = 'none';
}

// workinfo object

const workInfo1 = {
  myRecentPr: 'My Recent Projects',
  seeProject: 'See Project',
  bgImg: './images/Project1.png',
  prTitle1: 'PercyFlix- Your streaming choice',
  prTitle2: 'PercyFlix',
  prDesc: 'Watch your perfect choice of Movie/TvShow on percyflix – where comfort meets affordability. At our streaming platform, we specialize in providing top-quality streaming services at for free to watch. Whether you are looking for a kids shows or an adult shows, we have a wide range of options to suit your needs.',
  techList: ['HTML', 'CSS', 'Django', 'Python', 'Mysql', 'AWS cloud storage', 'JavaScript']
};


const workInfo3 = {
  myRecentPr: 'AirBnB clone',
  seeProject: 'See Project',
  bgImg: '#',
  prTitle1: 'AirBnB clone web',
  prTitle2: 'AirBnB clone web',
  prDesc: 'Discover your perfect home with us – where comfort meets affordability. At our agency, we specialize in providing top-quality rental houses at the best prices in the market. Whether you are looking for a cozy apartment or a spacious family house, we have a wide range of options to suit your needs.',
  techList: ['HTML', 'CSS', 'Flask', 'Python', 'JavaScript', 'MySQL',],
};

const workInfo4 = {
  myRecentPr: 'Simple Shell',
  seeProject: 'See Project',
  bgImg: '#',
  prTitle1: 'Simple Shell',
  prTitle2: 'Simple Shell',
  prDesc: 'Is a simple shell command line that covers the basics of how a shell interacts with the underlying operating system. It provides a foundation for understanding shell functionalities and system programming concepts. This project also encourages learners to gain practical experience in working with system calls, processes, and signals in a Unix-like environment.',
  techList: ['C'],
};

const workInfo5 = {
  myRecentPr: 'To do List',
  seeProject: 'See Project',
  bgImg: '#',
  prTitle1: 'To do list- To list daily tasks',
  prTitle2: 'To do list',
  prDesc: '[To Do List] is a web app for learning ES6 modules and webpack, and it is a simple website that displays a list of To do tasks and allows you to add and remove tasks from that list.',
  techList: ['HTML', 'CSS', 'Javascript', 'React & Redux'],
};

// markup work section from the wworkinfo array object

const mainElmnt = document.querySelector('main');
const divSection = document.createElement('div');
mainElmnt.insertBefore(divSection, aboutMeSection);
divSection.innerHTML = `<div class="myworks" id="my-works" class="blur">
        <div class="work-heading">
            <h4>${workInfo1.myRecentPr}</h4>
            <hr class="hline">
        </div>
        <div class="work-details" id="work-details">
            <div class="work-details-row1">
                <img src="${workInfo1.bgImg}">
                <div class="details-right1">
                    <h4>${workInfo1.prTitle2}</h4>
                    <p>${workInfo1.prDesc}</p>
                    <ul>
                        <li>${workInfo1.techList[0]}</li>
                        <li>${workInfo1.techList[1]}</li>
                        <li>${workInfo1.techList[2]}</li>
                        <li>${workInfo1.techList[3]}</li>
                        <li>${workInfo1.techList[4]}</li>
                        <li>${workInfo1.techList[5]}</li>
                        <li>${workInfo1.techList[6]}</li>
                    </ul>
                    <button class="btn" type="button" id="seeProject-1">${workInfo1.seeProject}</button>
                </div>
            </div>
            <div class="card-work">
              
                <div class=" work wdr22">
                    <h4>${workInfo3.prTitle1}</h4>
                    <p>${workInfo3.prDesc}</p>
                    <ul>
                        <li>${workInfo3.techList[0]}</li>
                        <li>${workInfo3.techList[1]}</li>
                        <li>${workInfo3.techList[2]}</li>
                        <li>${workInfo3.techList[3]}</li>
                        <li>${workInfo3.techList[4]}</li>
                        <li>${workInfo3.techList[5]}</li>
                    </ul>
                    <button type="button" id="seeProject-3">${workInfo3.seeProject}</button>
                </div>
                <div class=" work wdr23">
                    <h4>${workInfo4.prTitle1}</h4>
                    <p>${workInfo4.prDesc}</p>
                    <ul>
                        <li>${workInfo4.techList[0]}</li>
                    </ul>
                    <button type="button" id="seeProject-4">${workInfo4.seeProject}</button>
                </div>
                <div class="work wdr31">
                    <h4>${workInfo5.prTitle1}</h4>
                    <p>${workInfo5.prDesc}</p>
                    <ul>
                        <li>${workInfo5.techList[0]}</li>
                        <li>${workInfo5.techList[1]}</li>
                        <li>${workInfo5.techList[2]}</li>
                    </ul>
                    <button type="button" id="seeProject-5">${workInfo5.seeProject}</button>
                </div>
                </div>

        </div>

    </div>`;

// popup window will go here for project details

// project information goes here as an array of objects
const projectInfo = [
  {
    prName: 'PercyFlix',
    prDesc: 'Watch a show of your choice',
    techList: ['HTML', 'CSS', 'Javascript', 'C', 'Python'],
    backgroundImg: './images/Project1.1.png',
    pg: 'Watch your perfect choice of Movie/TvShow on percyflix – where comfort meets affordability. At our streaming platform, we specialize in providing top-quality streaming services at for free to watch. Whether you are looking for a kids shows or an adult shows, we have a wide range of options to suit your needs.',
    buttonLive: 'See Live',
    liveLink: '#',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/Persie-O/PercyFlix',
  },
  {
    prName: 'AirBnB clone',
    prDesc: 'Book a house of your choice',
    techList: ['HTML', 'Python', 'Flask', 'API', 'MySQL'],
    backgroundImg: './images/airbnb1.1.jpg',
    pg: 'Discover your perfect home with us – where comfort meets affordability. At our agency, we specialize in providing top-quality rental houses at the best prices in the market. Whether you are looking for a cozy apartment or a spacious family house, we have a wide range of options to suit your needs.',
    buttonLive: 'See Live',
    liveLink: '#',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/Persie-O/AirBnB_clone_v4',
  },
  {
    prName: 'Simple shell command line',
    prDesc: 'Command line',
    techList: ['C'],
    backgroundImg: './images/cmd.png',
    pg: 'Is a simple shell command line that covers the basics of how a shell interacts with the underlying operating system. It provides a foundation for understanding more advanced shell functionalities and system programming concepts. The project also encourages students or learners to gain practical experience in working with system calls, processes, and signals in a Unix-like environment.',
    buttonLive: 'See Live',
    liveLink: '#',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/Persie-O/simple_shell_project',
  },
  {
    prName: 'To Do List',
    prDesc: 'To add or remove list of daily activities',
    techList: ['HTML', 'CSS', 'Javascript'],
    backgroundImg: './images/todo.jpg',
    pg: '[To Do List] is a web app for learning ES6 modules and webpack, and it is a simple website that displays a list of To do tasks and allows you to add and remove tasks from that list.',
    buttonLive: 'See Live',
    liveLink: '#',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/Persie-O',
  },
];

// call to seeproject buttons on each card in work section

const cardButtonsArray = [
  document.querySelector('#seeProject-1'),
  document.querySelector('#seeProject-3'),
  document.querySelector('#seeProject-4'),
  document.querySelector('#seeProject-5'),
];

// link see project buttons to project info array respectively

const worksSection = document.querySelector('#my-works');
cardButtonsArray.forEach((buttonItem, index) => {
  const items = projectInfo[index];
  // start popup window
  buttonItem.addEventListener('click', () => {
    // blur the website background
    headerSection.classList.toggle('blur');
    heroSection.classList.toggle('blur');
    worksSection.classList.toggle('blur');
    aboutMeSection.classList.toggle('blur');
    contactFormSection.classList.toggle('blur');
    footerSection.classList.toggle('blur');

    // add markup for modal

    const bodyEle = document.querySelector('main');
    const section = document.createElement('section');
    bodyEle.appendChild(section);
    section.innerHTML = `<div class="modal" id="modal">
  
  <div class="modal-header" id="modal-header">
  <h2>${items.prName}</h2>
    
  <button type=""button" class="cross-button" id="cross-button">&times;</button>
  </div>
  <div class="tech-list" id="tech-list">
  <span class="tech-list1">${items.techList[0]}</span>
  <span class="tech-list1">${items.techList[1]}</span>
  <span class="tech-list1">${items.techList[2]}</span>
  <span class="tech-list1">${items.techList[3]}</span>
  <span class="tech-list1">${items.techList[4]}</span>
  </div>
  <div class="modal-body" id="modal-body">
  
  <div class="modalbody-left"><img src="${items.backgroundImg}" alt='featureimg'></div>
  <div class="modalbody-right">
  <h3>${items.pg}</h3> 
  <div class="modal-source-live">
  <a href="${items.liveLink}"><button type="button" class="livebtn">See Live <img src="./images/live-icon.png"></button></a>
  <a href="${items.sourceLink}"><button type="button" class="sourcebtn">See Source <img src="./images/git-icon.png"></button></a>
  </div>
  </div>
  </div>
</div>`;

    // close popup window

    const crossButton = document.querySelector('.cross-button');
    crossButton.addEventListener('click', () => {
      const modalContainer = document.querySelector('.modal');
      modalContainer.classList.toggle('modal-close');
      headerSection.classList.remove('blur');
      heroSection.classList.remove('blur');
      worksSection.classList.remove('blur');
      aboutMeSection.classList.remove('blur');
      contactFormSection.classList.remove('blur');
      footerSection.classList.remove('blur');
      const modalWindow = document.querySelector('main');
      modalWindow.removeChild(modalWindow.lastElementChild);
    });
  });
});

// function definition here

function formValidation(e) {
  const emailSection = document.querySelector('#email');
  const errMsg = document.querySelector('.errmsg');
  if (emailSection.value !== emailSection.value.toLowerCase()) {
    errMsg.textContent = '*Email must be in lower case';
    errMsg.style.color = 'red';
    emailSection.focus();
    e.preventDefault();
    e.stopPropagation();
  }
  return false;
}

// client side form validation

const form = document.getElementById('contactform');
form.addEventListener('submit', formValidation);

// local storage

const myForm = document.querySelector('#contactform');
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#email');
const userMsg = document.querySelector('#message');
// saving form data to local storage
myForm.addEventListener('input', () => {
  const info = {
    name: userName.value,
    email: userEmail.value,
    message: userMsg.value,
  };
  localStorage.setItem('storedData', JSON.stringify(info));
});

// get data from local storage
let userObject = JSON.parse(localStorage.getItem('storedData'));
if (!userObject) {
  userObject = {
    name: '',
    email: '',
    message: '',
  };
  userName.value = userObject.name;
  userEmail.value = userObject.email;
  userMsg.value = userObject.message;
}