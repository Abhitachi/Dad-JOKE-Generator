let joke = document.querySelector("#joke");
const btn = document.querySelector("#btn");

const connectToAPI = (e) => {
  const xhr = new XMLHttpRequest();
  joke.innerHTML = "Give Me A Min...";

  xhr.open("GET", "https://api.api-ninjas.com/v1/dadjokes?limit= " + 1);
  xhr.setRequestHeader("X-Api-Key", "ED5q8Yq/LEikLOlEypmlFA==slAjbjz5NCzdLgu2");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) console.log(xhr.responseText);
    let res = JSON.parse(xhr.responseText);
    console.log(res);
    joke.innerHTML = res[0].joke;
  };

  //   xhr.close();
};

btn.addEventListener("click", (e) => {
  connectToAPI(e);
});
