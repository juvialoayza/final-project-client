import React from 'react'

function PlacesList() {

    const navigate = useNavigate()

    const [placeslist, setPlacesList] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
    getPlacesList()
    }, [])

  const getPlacesList = async () => {
    try {
      const response = await placesListService()
      console.log(response)
      setPlacesList(response.data)
      setIsFetching(false)

    } catch(error) {
        console.log(error)
    }
  }

  if (isFetching === true) {
    return <h3>...buscando</h3>
  }
    
  return (
    <div>PlacesList</div>
  )
}

export default PlacesList