import RouteCard from "../components/RouteCard"

function MapPage(){

  return(
    <div>

      <h2 style={{textAlign:"center"}}>
        Route Recommendations
      </h2>

      <div style={{
        height:"400px",
        background:"#ddd",
        margin:"20px"
      }}>
        Map will appear here
      </div>

      <RouteCard
        type="Fastest Route 🚀"
        time="10 min"
        score="60"
      />

      <RouteCard
        type="Safest Route ⭐"
        time="14 min"
        score="85"
      />

      <RouteCard
        type="Alternative Route"
        time="12 min"
        score="70"
      />

    </div>
  )
}

export default MapPage