import React from 'react'
import Countries from '../../components/countries/Countries'
import Filter from '../../components/filter/SearchFilter'

const Home = () => {
  return (
    <div>
        <Filter />
        <Countries />
    </div>
  )
}

export default Home