const btnTabs = document.querySelectorAll('.tabs .head span');
const bodyArea = document.querySelector('.tabs .body');

function removeClass(element) {
  for (const tab of element) {
    if (tab.classList.contains('active')) tab.classList.toggle('active');
  }
}

function printToBody (title) {
  let text;
  switch (title.toLowerCase()) {
    case 'history' : 
      text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      break;
    case 'vision' :
      text = 'pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque'
      break;
    case 'goals' :
      text = 'convallis aenean et tortor at risus viverra adipiscing at'
      break;
  }
  
  bodyArea.innerHTML = `
  <p>
    <strong>${title}</strong>
    <br/>
    This is ${title} tab.
    <br/>
    ${text}
  </p>
  `
}

for ( const tab of btnTabs ) {
  tab.addEventListener('click', function() {
    let content = this.dataset.title;
    removeClass(btnTabs);
    this.classList.toggle('active');
    printToBody(content);
  })
}