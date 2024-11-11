const endpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

async function main(){
  const response = await fetch(endpoint);
  const random_fact = await response.json();
  console.log('Random Fact', random_fact);

  const main_div = document.getElementById('root');
  main_div.innerText = random_fact.text;
}



main();