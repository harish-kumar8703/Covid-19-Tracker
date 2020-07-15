import React ,{useEffect,useState}from "react"
import {NativeSelect,FormControl} from "@material-ui/core"
import { Fetchcountries } from "../../api";
import styles from "./CountryPicker.module.css"
const CountryPicker=({handleCountryChange})=>{
const[fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            setFetchedCountries(await Fetchcountries());
        }
        fetchAPI();
    },[setFetchedCountries]);
   
    return(
        <FormControl className={styles.FormControl} >
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country,index)=><option key={index} value={country}>{country}</option>)}
        </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;