export default function appendResults(content) {
  const results = document.querySelector('#results');
  results.innerHTML = '';
  results.append(content);
}

// function weatherCard() {
//   const card = document.createElement('div');
//   const city = document.createElement('h3');
//   const temp = document.createElement('')
// }
