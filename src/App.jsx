import axios from "axios";
import { useEffect,useState } from "react";
import { RestaurantDetails } from "./Restaurant-Details";
import "./App.css"

function App() {
  const [restauData,setReastauData] = useState([])
   const [fourStar,setFourStar] = useState(false)
   const [threeStar,setThreeStar] = useState(false)
   const [cash,SetCash] = useState(false);

   useEffect(() => {axios.get(" http://localhost:3001/get-restaurants").then((res) => {
    
   setReastauData(res.data)
   })}
   ,[])
 console.log(fourStar)
   const handleFourStar = () => {
     setFourStar(true);
   }
   const handleThreeStar = () => {
     setThreeStar(true);
   }
   if(fourStar === false)
   {
    return (
    
      <div>
        <button onClick={handleFourStar}>4 star</button>
        
       
        <button onClick={() => {
          SetCash(true)
        }}>Cash Only</button>
        
        {restauData.map((e) => <RestaurantDetails key={e.id} data={e}/>)}
     </div>
    );
    }
    else if(cash == true)
    {
      return (
    
        <div>
          <button onClick={handleFourStar}>4 star</button>
         
          <button onClick={() => {
            SetCash(true)
          }}>Cash Only</button>
            {restauData.map((e)  => {
            if(e.payment_methods=="cash"){
              return(<RestaurantDetails key={e.id} data={e}/>)
            }
          }) }
        
       </div>
      );
    }
    else{
      return (
    
        <div>
          <button onClick={handleFourStar}>4 star</button>
          <button >3 star</button>
          
          {restauData.map((e)  => {
            if(e.reviews>4){
              return(<RestaurantDetails key={e.id} data={e}/>)
            }
          }) }
       </div>
      );
    }
  
}

export default App;
