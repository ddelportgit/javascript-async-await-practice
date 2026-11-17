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
