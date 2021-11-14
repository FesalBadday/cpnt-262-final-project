"use strict";

// fetch data and return it into json
const fetchData = async () => {
  try {
    // link variable
    let link = null;

    // check what data is needed from link bar
    if (window.location.pathname === '/subscribe') {
      link = '/subs';
    } else if (window.location.pathname === '/team') {
      link = '/member';
    } else if (window.location.pathname === '/store') {
      link = '/games';
    } else {
      link = `/games/${window.location.pathname.split("/").pop()}`; // get game id
    }

    // fetch data
    const response = await fetch(link);
    // data variable
    let data = null;

    // check if response is ok
    if (!response.ok) {
      // if not throw an error
      throw new Error('Not 200 OK');
    } else {
      data = await response.json(); // return json file with data
    }

    // dataSection query selector
    const dataSection = document.querySelector(".data");

    // output variable
    let output = '';

    // check if data isn't undefined and it's an array
    if (typeof data !== 'undefined' && Array.isArray(data)) {
      // for loop to build the data
      data.forEach((info) => {
        // check what data is needed from link bar
        if (window.location.pathname === '/subscribe') {
          output +=
            `<div class="sub-card">
              
            </div>
          ` //info.email;


        } else if (window.location.pathname === '/team') {
          output +=
            `<div class="profile-card">
              <img class="profile-pic" src="${info.profilePic}" alt="${info.name}">
              <h2>${info.name}</h2>
              <p>${info.title}<p>
              <p>${info.bio}</p>
              <p><a href="${info.github}">Github</a></p>
              <p class="end-card">Unplugged: ${info.dateCreated}</p>
            </div>`
        } else if (window.location.pathname === '/store') {
          output +=
            `<div class="card">
              <article class="styles">
                <a href="store/${info.id}">
                  <img src="${info.imageSrc}" alt="${info.title}" width="${info.width}" height="${info.height}">
                </a>
                <div class ="text">
                <h3>${info.title}</h3>
                <p>${info.description}<p>
                </div>
              </article>
            </div>`;
        } else {
          output +=
            `<div class="card">
              <article class="styles">
                <img src="${info.imageSrc}" alt="${info.title}" width="${info.width}" height="${info.height}">
                <div class ="text">
                <h3>${info.title}</h3>
                <p>${info.description}<p>
                </div>
              </article>
            </div>`;
        }
      })
    } else {
      output = data.error;
    }

    // print output and date
    dataSection.innerHTML = output;

  } catch (err) { // catch errors
    console.log('Caught an error!', err); // console log the error
  }
}

// call fetchData function
fetchData();