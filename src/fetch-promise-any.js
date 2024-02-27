const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "file://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
        console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });

    // we want atleast 1 to be successful. The first one to elicit response is what gets displayed
    // Will always give one URL
    // Catch only happens if all of them failed
  