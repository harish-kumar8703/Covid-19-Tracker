import React from 'react';
import {Cards,Chart,CountryPicker} from "./components"
import styles from "./App.module.css"
import fetchData from './api';
import corona from '../src/image.png'
class App extends React.Component{
  state={
    data:{},
    country:''
  }
async  componentDidMount()
  {
    const fetchedData=await fetchData();
   
    this.setState({data:fetchedData})
  }
handleCountryChange=async(country)=>{
  //fetch and set data
  const fetchedData=await fetchData(country);
  this.setState({data:fetchedData,country:country})
console.log(fetchedData);

}

  render() { 
    const {data,country} = this.state;
  return (
    <div>
  <div className={styles.container}>
  <img src={corona} className={styles.image} alt="COVID-19"/>
  <Cards data={data}/>
  <CountryPicker handleCountryChange={this.handleCountryChange} />
 <Chart data={data} country={country}/>
  
  
  </div>
 
  </div>
);
}
}


export default App;
