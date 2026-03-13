function RouteCard({type,time,score}){

  return(
    <div style={{
      border:"1px solid gray",
      padding:"10px",
      margin:"10px"
    }}>

      <h3>{type}</h3>
      <p>Time: {time}</p>
      <p>Safety Score: {score}</p>

    </div>
  )

}

export default RouteCard