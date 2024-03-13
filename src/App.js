
import { useState ,useEffect} from 'react';
import './App.css';
import Material from './Material/Material3'
  function App(){
    const [data, setData]= useState([]);
    function getData(){
    fetch ("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((err) => console.log(err));
    }

    useEffect(() => {
        getData();
    },[]);
    console.log(data?.limit);
  return (
       <>
  <Material/>
    </>
  );
}

export default App;