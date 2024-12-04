function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetched data");
      }
    }, 3000);
  });
}

fetchData().then((data) => console.log(data)).catch((error) => console.error(error));