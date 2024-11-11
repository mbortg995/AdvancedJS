const endpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

async function main(){



  const main_div = document.getElementById('root');

  const random_fact_div = document.createElement('div');
  main_div.appendChild(random_fact_div);
  random_fact_div.setAttribute('id', 1);

  const number_button = document.createElement('button');
  main_div.appendChild(number_button);
  number_button.innerText = 'Get Random Fact';
  number_button.addEventListener('click', () => getrandomfact());

}

async function getrandomfact(){
  const response = await fetch(endpoint);
  const random_fact = await response.json();
  const random_fact_div = document.getElementById(1);
  random_fact_div.innerText = random_fact.text;
}



main();