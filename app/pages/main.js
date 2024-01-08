import Image from 'next/image'
import { useEffect, useState } from 'react'
import Box from '../components/box'

export default function MainPage() {
  const [data, setData] = useState({})
  const [palyer, setPlayer] = useState("O")
  const [win, setWin] = useState(false)

  const addItem = (key) => {
    if (win) return

    if (!data[key]) {
      setData({ ...data, [key]: palyer })
      
    }
  }

  useEffect(() => {
    isWin()
  }, [data])

  const isWin = (key) => {
    const obj = Object.entries(data)
    for (let x = 0; x <= 2; x++) {
      if (obj.filter(e => {
        return Number(e[0].split("_")[0]) === x && e[1] === palyer
      }).length >= 3) {
        setWin(true)
        return console.log(`${palyer} win`);
      }
      if (obj.filter(e => {
        return Number(e[0].split("_")[1]) === x && e[1] === palyer
      }).length >= 3) {
        setWin(true)
        return console.log(`${palyer} win`);
      }
    }

    if (palyer === "X") setPlayer("O")
    else setPlayer("X")
  }

  return (
    <main className='w-screen h-screen flex justify-center items-center'>
      <div className='bg-gray-200 w-96 aspect-square p-10'>
        <div className='flex gap-4 items-start'>
          <div className=''>
            {Array(3).fill('').map((e, x) => {
              return <div key={x} className='flex'>
                {Array(3).fill('').map((e, y) => {
                  return <Box key={y} value={data?.[`${x}_${y}`]} onClick={() => {
                    addItem(`${x}_${y}`)
                  }}></Box>
                })}
              </div>
            })}
          </div>
          <div>
            {Object.entries(data).map(([e, v]) => {
              const [x, y] = e.split("_")
              return <div>{x}, {y} : {v}</div>
            })}
          </div>
          
          {win &&
          <div className=''>
            {palyer} palyer Win!
          </div>}
        </div>
        <button
          onClick={() => {
            setData({})
            setPlayer('X')
            setWin(false)
          }}
          className='bg-blue-500 mt-4 px-4 rounded-md text-white' >Reset</button>
      
      </div>
    </main>
  )
}
