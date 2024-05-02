let url = "http://universities.hipolabs.com/search?name=";
let btn = document.getElementById("button");

btn.addEventListener("click",async ()=>{
    let state = document.querySelector("input").value;
    console.log(state);
    let clgArr = await getColleges(state);
    console.log(clgArr);
    showClg(clgArr);

});


function showClg(clgArr){
    let list = document.querySelector("ul");
    list.innerText = "";
    for(clg of clgArr){
        let li = document.createElement("li");
        li.innerText = clg.name;
        list.appendChild(li);
    }

}

async function getColleges(state){
    try{
    let res = await axios.get(url+state);
    return res.data;
    }
    catch(e){
        return ("error",e);
    }
}