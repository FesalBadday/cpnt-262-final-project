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
          output += info.email;
        } else if (window.location.pathname === '/team') {
          document.querySelector('.data')
          output += `
          <img src="${info.profilePic}" alt="${info.name}">
          <h2>${info.name}</h2>
          <p>${info.title}<p>
          <p>${info.bio}</p>
          <p><a href="${info.github}">Github</a></p>
          <p>Unplugged: ${info.dateCreated}</p>
          `
        } else {
          output += info.width;
        }
      })
    } else {
      output = 'Data Not Found';
    }

    // print output and date
    dataSection.innerHTML = output;

  } catch (err) { // catch errors
    console.log('Caught an error!', err); // console log the error
  }
}

// call fetchData function
fetchData();