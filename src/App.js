import BusList from './BusList/BusList';
import RouteList from './RouteList/RouteList';
import AddRoute from './AddRoute/AddRoute';
import AddBus from './AddBus/AddBus';
import BusDetail from './BusDetail/BusDetail';
import RouteDetail from './RouteDetail/RouteDetail';
import {Route,Routes} from 'react-router-dom'
import { useState,useEffect } from 'react';
 
function App() { 
  const [buses,setBuses]=useState([])

  useEffect(()=>{
    const fetchData=async ()=>{
        const response=await fetch('http://localhost:2001/buses')
        const jsonData=await response.json()
        setBuses(jsonData)
    }
    fetchData()
  },[])

  return (
    <div className="App">
    <Routes>
      <Route path='/buses' element={<BusList buses={buses} />}/>
      <Route path='/routes' element={<RouteList />}/>
      <Route path='/addRoute' element={<AddRoute />}/>
      <Route path='/addBus' element={<AddBus />} />
      <Route path='/bus/:id' element={<BusDetail buses={buses} />}/>
      <Route path='/route/:id' element={<RouteDetail />}/>
    </Routes>
    </div> 
  );
}

export default App;
