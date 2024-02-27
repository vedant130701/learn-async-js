const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
    });

    // chained then block. Returned from one then block to the next one.
    // cannot work with value of promise until we use the then block
    console.log('Chaining promises ... ');
  