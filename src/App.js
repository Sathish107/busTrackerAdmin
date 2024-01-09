import BusList from './BusList/BusList';
import RouteList from './RouteList/RouteList';
import AddRoute from './AddRoute/AddRoute';
import AddBus from './AddBus/AddBus';
import BusDetail from './BusDetail/BusDetail';
import RouteDetail from './RouteDetail/RouteDetail';
import EditBus from './EditBus/EditBus';
import {Route,Routes} from 'react-router-dom'
import { useState,useEffect } from 'react';
 
function App() { 
  const [buses,setBuses]=useState([])
  const [routes,setRoutes]=useState([])

  useEffect(()=>{
    const fetchData=async ()=>{
        const busResponse=await fetch('http://localhost:2001/buses')
        const jsonBusData=await busResponse.json()
        setBuses(jsonBusData)

        const routeResponse=await fetch('http://localhost:2000/routes')
        const jsonRouteData=await routeResponse.json()
        setRoutes(jsonRouteData)        
    }
    fetchData()
  },[])

  return (
    <div className="App">
    <Routes>
      <Route path='/buses' element={<BusList buses={buses} />}/>
      <Route path='/routes' element={<RouteList routes={routes}/>}/>
      <Route path='/addRoute' element={<AddRoute />}/>
      <Route path='/addBus' element={<AddBus />} />
      <Route path='/bus/:id' element={<BusDetail buses={buses} />}/>
      <Route path='/route/:id' element={<RouteDetail routes={routes}/>}/>
      <Route path='/editbus/:id' element={<EditBus buses={buses}/>} />
    </Routes>
    </div> 
  );
}

export default App;
