const url = require("url");

const myUrl = new URL("http://localhost:3000/about?name=kk&age=20");

console.log(myUrl.hostname);          // localhost
console.log(myUrl.pathname);          // /about
console.log(myUrl.searchParams);      // URLSearchParams object
console.log(myUrl.searchParams.get("name")); // kk
console.log(myUrl.searchParams.get("age"));  // 20

// Loop all query params
myUrl.searchParams.forEach((value, key) => {
    console.log(key, value);
});