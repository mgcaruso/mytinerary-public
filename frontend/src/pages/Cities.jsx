import React, { useEffect, useState } from 'react'
import '../styles/secondary-pages.css'
import NoResults from '../components/NoResults'
import CitiesMapped from '../components/CitiesMapped'


import citiesActions from '../redux/actions/citiesActions'
import { useDispatch, useSelector } from 'react-redux'


function Cities() {


  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(citiesActions.filterCities(inputValue))
  }, [inputValue])

  const filter = useSelector(store => store.citiesReducer.cityFilter)



  //-----------------------------RETURN---------------------------------------//
  return (
    <div className="body cities-body flex flex-col flex-wrap">
      <div className="input search-filters w-full flex flex-row flex-wrap content-center items-center p-3">

        <input onKeyUp={(e) => { setInputValue(e.target.value) }} className="input-search appearance-none bg-[rgba(255,255,255,0.6)] border-b-2 border-slate-300 text-gray-300 mr-3 py-4 px-5 mx-5 leading-tight focus:outline-none focus:text-slate-800 placeholder:text-black placeholder:bold focus:border-[#274954] rounded-sm" type="text" placeholder="Search by city..." aria-label="Search by city..." />

      </div>

      {filter.length > 0 ? <CitiesMapped filtered={filter} /> : <NoResults />}
    </div>
  )
}


export default Cities

