import React,{useEffect,useState} from 'react';
import './App.css';
import TableInfo from './Component/TableInfo';
import baseURL from "./constant";
import axios from "./constant";
function App() {
  const [Data, setData] = useState();
  useEffect(() => {
   axios.get('/get/data').then((response)=>setData(response.data))
  }, [])
  return (
    <div className="App">
      <TableInfo Data={Data}/>
    </div>
  );
}

export default App;
