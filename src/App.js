import BusList from './BusList/BusList';
import RouteList from './RouteList/RouteList';
import AddRoute from './AddRoute/AddRoute';
import AddBus from './AddBus/AddBus';
import {Route,Routes} from 'react-router-dom'
 
function App() { 
  return (
    <div className="App">
    <Routes>
      <Route path='/buses' element={<BusList />}/>
      <Route path='/routes' element={<RouteList />}/>
      <Route path='/addRoute' element={<AddRoute />}/>
      <Route path='/addBus' element={<AddBus />} />
    </Routes>
    </div> 
  );
}

export default App;
