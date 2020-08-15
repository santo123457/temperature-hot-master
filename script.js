document.getElementById("clickBtn").addEventListener("click", function(){
   const cityName = document.getElementById("inputValue").value;
   fetch("http://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&APPID=e6dc4e6990dc7601ff5c27997d53f488")
   .then(res =>  res.json())
   .then(data => { 
       const Temp = (data.list[0].main.temp_min - 272).toFixed(2);
       document.getElementById("City").innerText= data.city.name;
       document.getElementById("temperature").innerText = Temp;
       document.getElementById("weatherUpdate").innerText= data.list[0].weather[0].main;
   }) 

})

