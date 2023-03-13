const apiUrls = [
  'https://api.example.com/1',
  'https://api.example.com/2',
  'https://api.example.com/3',
  // add more API URLs here
];

// function to fetch data from an API URL
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(`Error fetching data from ${url}: ${error}`));
}

// function to measure time taken for Promise.all
function measurePromiseAll() {
  const start = Date.now();
  Promise.all(apiUrls.map(fetchData))
    .then(() => {
      const end = Date.now();
      const timeTaken = end - start;
      document.getElementById('output-all').innerHTML = `${timeTaken}ms`;
    });
}

// function to measure time taken for Promise.any
function measurePromiseAny() {
  const start = Date.now();
  Promise.any(apiUrls.map(fetchData))
    .then(() => {
      const end = Date.now();
      const timeTaken = end - start;
      document.getElementById('output-any').innerHTML = `${timeTaken}ms`;
    });
}

// call the functions to measure performance
measurePromiseAll();
measurePromiseAny();
