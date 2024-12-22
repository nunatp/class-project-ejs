import express from "express";
 
const app = express();
const port = 3000;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

app.get("/",(req,res)=>{
  const today = new Date("September 2, 2024 14:15:00");
  let day = today.getDay();
  const dayName = weekday[day]; // Get the name of the day

let type = "a weekday";
let  adv = "it's time to work hard";

 if(day === 0 ||day === 6 ){
    type = "a weekend";
    adv = "Time to relax and enjoy!";
};
  
 res.render("index.ejs", { //แสดงออกทางหน้าจอ render ไปที index.ejs
   dayName : dayName,
    dayType : type,
   advice  : adv,
 });
});

app.listen(port,()  => {
    console.log(`Server running on port ${port}.`);
});