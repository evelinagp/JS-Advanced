function previousDate (year, month, day){
const date = new Date(year, month, day);

//console.log(date.getFullYear(), date.getMonth(), date.getDate());
const millisecs = 1000 * 60 * 60 * 24;
date.setDate(date.getDate () - 1);    
    console.log( date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate ());
}