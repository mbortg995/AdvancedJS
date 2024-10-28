function getNumberle(){
  const numberle = [];
  for(let i=0; i<5; i++){
    numberle.push(getRandomInt(1,10));
  }
  return numberle;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function create_panels(root_id){

  const header_div = document.createElement('div');
  root_id.appendChild(header_div);
  header_div.setAttribute('class', 'header');
  header_div.setAttribute('id', 'header');

  const main_div = document.createElement('div');
  root_id.appendChild(main_div);
  main_div.setAttribute('class', 'main');

  const keyboard_div = document.createElement('div');
  root_id.appendChild(keyboard_div);
  keyboard_div.setAttribute('class', 'keyboard');

}

function set_title(numberle){
  const header_div = document.getElementById('header');
  const title = document.createElement('h1');
  title.innerText = numberle;
  header_div.appendChild(title);
  const hr = document.createElement('hr');
  header_div.appendChild(hr);
}

function main(){
  const numberle = getNumberle();
  const root_id = document.getElementById('root');
  create_panels(root_id);
  set_title(numberle);
}

main();