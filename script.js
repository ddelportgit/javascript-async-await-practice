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

// Task 4

const usersPromise = Promise.resolve("Users loaded");
const postsPromise = Promise.resolve("Posts loaded");
const commentsPromise = Promise.resolve("Comments loaded");

async function loadAllData() {
  const [users, posts, comments] = await Promise.all([
    usersPromise,
    postsPromise,
    commentsPromise,
  ]);

  console.log(users);
  console.log(posts);
  console.log(comments);
}

loadAllData();

// Task 5

function fetchUsers() {
  return Promise.resolve(["Alex", "Sarah"]);
}

function fetchPosts() {
  return Promise.resolve(["Post 1", "Post 2"]);
}

function fetchComments() {
  return Promise.resolve(["Comment 1", "Comment 2"]);
}

async function loadDashboard() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments(),
    ]);

    console.log(users);
    console.log(posts);
    console.log(comments);
    console.log("Dashboard loaded successfully");
  } catch (error) {
    console.log(error);
  }
}

loadDashboard();

// fetching API data

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    console.log(posts[0].title);
    console.log(posts[0].body);
    console.log(posts.length);
  } catch (error) {
    console.log(error.message);
  }
}

getPosts();
