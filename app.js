let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
    let input = document.querySelector("input").value;
    let country = input;
    let collegeLi = await getColleges(country);
    showCol(collegeLi);
    console.log(collegeLi);
})

function showCol(collegeLi){
    let list = document.querySelector("ul");
    list.innerText = "";
    for(col of collegeLi){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
        // console.log(col.name);
    }
}

let country = "India";
async function getColleges(country) {
    try{
        let res = await axios.get(url + country);
        // console.log(res.data);
        return res.data;
    }catch(e){
        console.log(e);
    }
    

}