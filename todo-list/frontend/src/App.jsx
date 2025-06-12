import { useEffect, useState } from 'react'
import TaskCard from './components/TaskCard'

const options = {
  method: "GET"
}

async function fetchCurrentList () {
    const response = await fetch('http://localhost:5000/currentList', options)
    console.log(response.json())
}

function App() {
  const [currentList, setCurrentList] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:5000/currentList', options)
    .then((res) => res.json())
    .then((res) => {
      setCurrentList(res.results)
    })
    .catch((err) => console.log(err))
  }, [])

  console.log(currentList)

  return (
    <>
    <div className='flex flex-row items-center justify-center'>
      <div>
        <h1 className='py-10 text-4xl text-center'>Task List</h1>
        <div className='h-1 px-50 md:px-100 bg-black'></div>
        <div>
          {/* {currentList.map((ele) => (
            <p>{ele.TaskList}</p>
          ))} */}
          <TaskCard task={"Task1"}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
