// Callback version rewritten with async/await
function oldLoad(cb) { setTimeout(() => cb("done"), 500); }
function newLoad() { return new Promise(res => setTimeout(() => res("done"), 500)); }
async function main() { console.log(await newLoad()); }
main();
