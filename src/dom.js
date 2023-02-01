export default function appendResults(content) {
  const results = document.querySelector('#results');
  results.innerHTML = '';
  results.append(content);
}
