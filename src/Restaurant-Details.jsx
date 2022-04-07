import "./Restaurant-Details.css"
export const RestaurantDetails = (props) => {
   
   
  return(
      <div className="card" >
      <img src={props.data.image} width="400px" height={"200px"}></img>
       <div className="details"> 
       <h2>{props.data.restaurantName}</h2>
       <p className="category">{props.data.categories.map((e) =><span>{`${e} |`}</span> )}</p>
         <p>{`Cost is ${props.data.cost_for_one} for one` }</p>
              <p>{`Accepts ${props.data.payment_methods} only`}</p>
        </div>  
        <div className="reviews"><span className="greenColor">{props.data.reviews}</span></div>
      </div>
  )


}