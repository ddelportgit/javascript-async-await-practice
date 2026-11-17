// Task 1

async function getUser() {
  return "Alex";
}

getUser().then((result) => {
  console.log(result);
});

// Task 2

async function getUserData() {
  const user = await Promise.resolve("Sarah");
  console.log(user);
}

getUserData();

// Task 3

async function getData() {
  try {
    const data = await Promise.reject("Failed to fetch data");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
