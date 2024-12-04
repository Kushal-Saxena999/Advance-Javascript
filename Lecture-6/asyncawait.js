function fetchUserData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name: "chaicode", url: "https://chaicode.com"})//we can use reject here too
    }, 3000);
  })
}

//2nd way

async function getUserData(){
  try {
    console.log('Fetching user data...');
    const userData = await fetchUserData();
    console.log("User data fetched successfully");
    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();