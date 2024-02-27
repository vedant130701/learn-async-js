const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  // we wanted jsonPromise to run only after fetchPromise. Even though both async, we want some form of sync
  // So looks like callback here.
  // Sol for this chaining promises.
  // we cannot do jsonPromise.forEach as it is a promise object. So thats why we are putting in jsonPromise.then
  jsonPromise.then((products) => {
    products.forEach(product => {
      console.log(product.name);
    });
  });
});

console.log('Fetching products ... ');
