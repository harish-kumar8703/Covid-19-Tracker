import React from "react"
import Axios from "axios"
const url="https://covid19.mathdro.id/api"

export const fetchData = async(country) => {
let changableurl=url;
if(country)
{
    changableurl=`${url}/countries/${country}`
}
try{
const {data:{confirmed,recovered,deaths,lastUpdate}}=await Axios.get(changableurl);
return{confirmed,recovered,deaths,lastUpdate}

}
catch(error)
{
console.log(error);
}
}

export  const fetchDailyData=async()=>{
    try{
        const {data}=await Axios.get(`${url}/daily`);
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate

        }));
        return modifiedData;
       //here 
    }
    catch(error)
    {
console.log(error);
    }
}
export const Fetchcountries=async()=>{
    try{
        const {data:{countries}}=await Axios.get(`${url}/countries`)
        return countries.map((country)=>country.name);
    }
    catch(err)
    {
        console.log(err);
    }
}
export default fetchData;

