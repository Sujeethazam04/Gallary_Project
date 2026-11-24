
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=28`
    )
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = (
    <h3 className='text-gray-300 font-semibold text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      Loading...
    </h3>
  )

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={elem.id}>
          <Card elem={elem} />
        </div>
      )
    })
  }

  return (
    <div className='bg-black overflow-auto min-h-screen text-white w-full gap-6'>

      <div className='flex flex-wrap gap-4 p-2 pb-24 lg:pb-2'>
        {printUserData}
      </div>

      <div className='fixed bottom-0 left-0 w-full z-50 lg:static'>
        <Button
          index={index}
          setIndex={setIndex}
          setUserData={setUserData}
        />
      </div>

    </div>
  )
}

export default App
