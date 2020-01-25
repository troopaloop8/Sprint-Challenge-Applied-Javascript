// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const newHeader = document.createElement('div');
    const newDate = document.createElement('span');
    const newh1 = document.createElement('h1');
    const newTemp = document.createElement('span');

    newDate.textContent = 'SMARCH 28, 2019';
    newh1.textContent = 'Lambda Times';
    newTemp.textContent = '98°';

    newHeader.classList.add('header');
    newDate.classList.add('date');
    newTemp.classList.add('temp');

    newHeader.appendChild(newDate);
    newHeader.appendChild(newh1);
    newHeader.appendChild(newTemp);

    return newHeader;

}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
