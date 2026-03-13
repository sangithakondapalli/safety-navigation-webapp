import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Home() {

  const navigate = useNavigate()

  const [source,setSource] = useState("")
  const [destination,setDestination] = useState("")

  const handleSearch = () => {
    navigate("/map")
  }

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>

      <h1>SafeRoute 🚦</h1>

      <input
        placeholder="Enter Source"
        value={source}
        onChange={(e)=>setSource(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Enter Destination"
        value={destination}
        onChange={(e)=>setDestination(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleSearch}>
        Find Safe Route
      </button>

    </div>
  )
}

export default Home