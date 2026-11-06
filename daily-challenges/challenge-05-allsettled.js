async function fetchAll() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/invalid"
  ];
  const results = await Promise.allSettled(urls.map(u => fetch(u).then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  })));
  results.forEach((r,i) => console.log(i, r.status, r.value?.name || r.value?.title || r.reason?.message));
}
fetchAll();
