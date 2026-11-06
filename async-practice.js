// Lesson 11: Callbacks, Promises, Async/Await

console.log("1 - Start");
setTimeout(() => console.log("2 - Delayed 2s"), 2000);
console.log("3 - End");

function loadUser(userId, callback) {
  setTimeout(() => callback({ id: userId, name: "John", age: 30 }), 1500);
}
loadUser(1, (data) => console.log("Callback user:", data));

function getUserData(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "John" }), 500);
  });
}

async function fetchUserData(userId) {
  try {
    const user = await getUserData(userId);
    console.log("Async user:", user);
    return user;
  } catch (err) {
    console.error("Failed:", err);
    throw err;
  }
}
fetchUserData(1);

async function getUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log("Fetched user:", data.name);
    return data;
  } catch (err) {
    console.error("Fetch failed:", err.message);
  }
}
getUser(1);

async function getAllUsers() {
  const [u1, u2] = await Promise.all([getUserData(1), getUserData(2)]);
  console.log("Parallel users:", u1, u2);
}
getAllUsers();
