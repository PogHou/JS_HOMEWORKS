"use strict";
{
  for (let i = 20; i <= 30; i += 0.5) {
    console.log("1st task:", i);
  }
}

{
  const rate = 27;
  for (let usd = 10; usd <= 100; usd += 10) {
    const uah = usd * rate;
    console.log(`2nd task: ${usd}$ = ${uah}₴`);
  }
}

{
  const N = 50;

  for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square <= N) {
      console.log(`3rd task: ${i} (i^2 = ${square})`);
    }
  }
}

{
  const n = 29;
  let isPrime = n > 1;
  if (isPrime) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  console.log(isPrime ? "is prime" : "is not prime");
}

{
  let n = 81;
  let isPower = false;
  for (let k = 0; ; k++) {
    const power = 3 ** k;
    if (power === n) {
      isPower = true;
      break;
    }
    if (power > n) {
      break;
    }
  }

  if (isPower) {
    console.log(`${n} is obtained by 3^n`);
  } else {
    console.log(`${n} cannot be obtained by 3^n`);
  }
}
