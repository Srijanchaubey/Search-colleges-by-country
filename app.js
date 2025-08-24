let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  let colarr = await getcolleges(country);
  show(colarr);
});

function show(colarr) {
  let list = document.querySelector("#list");
  for (col of colarr) {
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getcolleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (err) {
    return [];
  }
}
