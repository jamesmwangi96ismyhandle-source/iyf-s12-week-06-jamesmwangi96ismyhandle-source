const rand = (n) => new Promise(res => setTimeout(() => res(n), Math.random()*1000));
async function run() {
  const t0 = Date.now();
  const a = await rand("A"); console.log(a);
  const b = await rand("B"); console.log(b);
  const c = await rand("C"); console.log(c);
  console.log("Total ms:", Date.now()-t0);
}
run();
