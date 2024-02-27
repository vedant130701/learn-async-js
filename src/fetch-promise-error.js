const fetchPromise = fetch(
    "https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json",
  );

//   const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
// this is the correct URL for no error.
  
  fetchPromise
    .then((response) => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(`Bad Response : ${response.status}`) 
    })
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
        })
    .catch((error) => {
        console.error(`Failed to get products: ${error}`);
    });
    // if fetch fails also catch executes

    // try catch

    console.log('Chaining promises ... ');
  