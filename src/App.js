import axios from "axios";
import { useState } from "react";

function App() {

  const [movies,setMovies] =  useState([]);

  const [isError,SetisError] = useState(false);  

  const  fetchMovies = async ()=>{

    
      //fetch resourse
      console.log('Fetching api');

    try{const response = await axios.get("https://api.dynoacademy.com/test-api/v1/movies");
    setMovies(response.data.moviesData);}
    catch(error){
      SetisError(true);
    }
      

      
      

      

      

  }

  return (
    <div className="App">
      
      <button onClick={fetchMovies} >Get All Movies</button> <br/>

    {isError?<div style={{background:"red",color:"white",padding:'10px',margin:"10px"}}>
        Error!
      </div>
      :<>
      <div style={{background:"#e7e7e7",padding:"10px",margin:"7px"}  }>

{ movies.map((el)=>
   
 <div key={el.id}> {el.name}  </div>
 
 )}
 
 
 
</div>
      </>}
      
      
    
    

    </div>
  );
}

export default App;
