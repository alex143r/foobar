export function get(callback) {
  fetch("https://foobar-data.herokuapp.com/", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data));
}

export function postSold(payload) {
  fetch("https://testerino-5797.restdb.io/rest/foobarsold/sold", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5f96a7fb4b77c1637d147dd1",
      "cache-control": "no-cache",
    },
    body: JSON.stringify(payload),
  });
}
export function getSold(callback) {
  fetch("https://testerino-5797.restdb.io/rest/foobarsold?max=1000000", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5f96a7fb4b77c1637d147dd1",
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data));
}
