async function fetchUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) return { name: "Default User", email: "default@test.com" };
    return await res.json();
  } catch { return { name: "Default User", email: "default@test.com" }; }
}
fetchUser(999).then(u => console.log(u));
