const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  // if there was a function sequentially here, i.e no callbacks, then it will pass to next function before full data comes
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response? ${response.ok? 'yes' : 'no'}`);
    console.log(`Response Status: ${response.status}`);
  });
  // then block happens async. But helps keep it sync with fetch.
  // happens only when fetch is completed
  // doing fetch is doing a promise. When fetch gets complete, i.e promise gets complete, handle response.
  
  console.log("Started request…");
  