// import { useEffect } from "react"
// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"

// function PlacesList() {

//     const navigate = useNavigate()

//     const [placeslist, setPlacesList] = useState([])
//     const [isFetching, setIsFetching] = useState(true)

//     useEffect(() => {
//     getPlacesList()
//     }, [])

//   const getPlacesList = async () => {
//     try {
//       const response = await placesListService()
//       console.log(response)
//       setPlacesList(response.data)
//       setIsFetching(false)

//     } catch(error) {
//         console.log(error)
//     }
//   }

//   if (isFetching === true) {
//     return <h3>...buscando</h3>
//   }
    
//   return (
//     <div>
//         {placeslist.map((eachPlace) => {
//             return (
//                 <p key= {eachPlace._id}>
//                     <Link to={`/experiences/${eachPlace.place}`}>
//                     <h4> {eachPlace.place}</h4>
//                     </Link>
//                 </p>
//             )
//         })}
//         PlacesList</div>
//   )
// }



// export default PlacesList