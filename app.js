const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const https=require('https');
const { log } = require('console');
const ejs=require('ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');
require('dotenv').config();
const apiid = process.env.apiid;

let location="London";
let id="10d"
let tem;
let des;
let day;
let addr1,addr2,addr3,addr4,addr5;
let day1,day2,day3,day4,day5;
let min1,min2,min3,min4,min5;
let max1,max2,max3,max4,max5;
let i=0;
let max,sea,pres,Humidity,sp,vi;

app.listen(3000,function(req,res){
    console.log("Running on server 3000");
})

let url="https://api.openweathermap.org/data/2.5/forecast?q="+location+"&cnt=7&mode=JSON&units=metric&appid="+apiid;
let addr=" https://openweathermap.org/img/wn/"+id+"@2x.png"

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
})



app.post("/",function(req,res){
  location=req.body.inloc;
let url="https://api.openweathermap.org/data/2.5/forecast?q="+location+"&cnt=7&mode=JSON&units=metric&appid="+apiid;
  
console.log(location);

https.get(url,function(response){
  response.on("data",function(data){
      let weather=JSON.parse(data);
      let id=weather.list[0].weather[0].icon;
      let addr=" https://openweathermap.org/img/wn/"+id+"@2x.png" ;
  tem=weather.list[0].main.temp;
  day=weather.list[0].dt_txt;
  des=weather.list[0].weather[0].description;
 
  id1=weather.list[1].weather[0].icon;
  id2=weather.list[2].weather[0].icon;
  id3=weather.list[3].weather[0].icon;
  id4=weather.list[4].weather[0].icon;
  id5=weather.list[5].weather[0].icon;

  addr1=" https://openweathermap.org/img/wn/"+id1+"@2x.png";
  addr2=" https://openweathermap.org/img/wn/"+id2+"@2x.png";
  addr3=" https://openweathermap.org/img/wn/"+id3+"@2x.png";
  addr4=" https://openweathermap.org/img/wn/"+id4+"@2x.png";
  addr5=" https://openweathermap.org/img/wn/"+id5+"@2x.png";

  day1=weather.list[1].dt_txt;
  day2=weather.list[2].dt_txt;
  day3=weather.list[3].dt_txt;
  day4=weather.list[4].dt_txt;
  day5=weather.list[5].dt_txt;
 
  min1=weather.list[1].main.temp_min;
  max1=weather.list[1].main.temp_max;

  min2=weather.list[2].main.temp_min;
  max2=weather.list[2].main.temp_max;
  
  min3=weather.list[3].main.temp_min;
  max3=weather.list[3].main.temp_max;
  
  min4=weather.list[4].main.temp_min;
  max4=weather.list[4].main.temp_max;
  
  min5=weather.list[5].main.temp_min;
  max5=weather.list[6].main.temp_max;
  
  pres=weather.list[0].main.pressure;
  Humidity=weather.list[0].main.humidity;
  sp=weather.list[0].wind.speed;
  vi=weather.list[0].visibility;
max=weather.list[0].main.temp_max;
sea=weather.list[0].main.temp_max;

 res.render("list",{ addr:addr,tem:tem,day:day,des:des,addr1:addr1,addr2:addr2,addr3:addr3,addr4:addr4,addr5:addr5,day1:day1,day2:day2,day3:day3,day4:day4,day5:day5,min1:min1,min2:min2,min3:min3,min4:min4,min5:min5,max1:max1,max2:max2,max3:max3,max4:max4,max5:max5,pres:pres,Humidity:Humidity,sp:sp,vi:vi,max:max,sea:sea,location:location})
  })
})

})









