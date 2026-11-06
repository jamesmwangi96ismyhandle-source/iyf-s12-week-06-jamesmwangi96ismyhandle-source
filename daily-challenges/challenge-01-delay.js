function delay(ms) { return new Promise(res => setTimeout(res, ms)); }
async function test() { await delay(2000); console.log("Prints after 2s"); }
test();
