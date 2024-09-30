const apikey="45da681f2677f5efb5b0533bdb038cf5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=Metric";

const search=document.querySelector(".city");
const searchbtn=document.querySelector(".search button")

async function checkwhether(city) {
    
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();

    console.log(data);

    document.querySelector(".cityname").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector("#humidity").innerHTML=data.main.humidity+"%";
    document.querySelector("#wind").innerHTML=data.wind.speed+"Km/h";
}
searchbtn.addEventListener("click",()=>{
    checkwhether(search.value);
})
