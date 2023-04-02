import React from 'react'
import { useState } from 'react'
import chartData from './data.json'

const App = () => {

  const [isHover, setIsHover] = useState(chartData)

  const time = new Date()
  const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const today = week[time.getDay()]


  const updateStateHover = (value) => {
   const newArray = isHover.map((obj) => {
      if(obj.day == value) {
        return {...obj, isHovered: true}
      } else {
        return obj
      }
    })
    setIsHover(newArray)
  }

  const updateStateUnhover = (value) => {
    const newArray = isHover.map((obj) => {
       if(obj.day == value) {
         return {...obj, isHovered: false}
       } else {
         return obj
       }
     })
     setIsHover(newArray)
   }
 
  const mouseEnter = (e) => {
    switch(e.target.id) {
      case('mon'):
      updateStateHover("mon")
      break

      case('tue'):
      updateStateHover("tue")
      break
      
      case('wed'):
      updateStateHover("wed")
      break

      case('thu'):
      updateStateHover("thu")
      break

      case('fri'):
      updateStateHover("fri")
      break

      case('sat'):
      updateStateHover("sat")
      break

      case('sun'):
      updateStateHover("sun")
      break
    }
  }

  const mouseLeave = (e) => {
    switch(e.target.id) {
      case('mon'):
      updateStateUnhover("mon")
      break

      case('tue'):
      updateStateUnhover("tue")
      break

      case('wed'):
      updateStateUnhover("wed")
      break

      case('thu'):
      updateStateUnhover("thu")
      break

      case('fri'):
      updateStateUnhover("fri")
      break

      case('sat'):
      updateStateUnhover("sat")
      break

      case('sun'):
      updateStateUnhover("sun")
      break
    }
  }


  const chartBars = isHover.map((data, index) => {
      return <div key={index} className='flex flex-col justify-center items-center gap-2 px-1'>
      <div className={`text-xs bg-Darkbrown font-bold text-white p-1  rounded-sm leading-none tracking-wide  ${data.isHovered ? `opacity-1` : `opacity-0`} transition-all ease-in-out duration-300`}>{`$${data.amount}`}</div>
      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} id={data.day} style={{height: `${data.amount + 80}px`}} className={`w-7 rounded-md ${data.day === today ? `bg-Cyan` : `bg-Softred`} transition-all ease-in-out duration-300 hover:bg-opacity-60`}></div>
      <h1>{data.day}</h1>
    </div>
    })
  

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='flex flex-col justify-start items-center gap-4 bg-Cream w-full h-fit  max-w-[545px] rounded-xl shadow-2xl p-8'>
          <div id='header-container' className='flex justify-between items-center w-full bg-Softred px-2 py-4 rounded-xl text-white'> 
            <div id="info">
              <h1 className='font-normal text-xs'>My Balance</h1>
              <h1 className='font-bold text-xl tracking-wider'>$921.48</h1>
            </div>
            <div id="log">
              <img src="/logo.svg" alt="" />
            </div>
          </div>
          
          <div id="chart-container" className='bg-white w-full rounded-xl px-2 py-4'>
            <h1 className='font-bold text-xl text-Darkbrown'>Spending - Last 7 days</h1>
            <div id="chart-bars" className='relative flex justify-around items-end text-center mt-12'>
              {chartBars}
            </div>
            <div id="footer" className='flex justify-between px-2 border-t-2 mt-4 pt-4'>
                <div>
                  <h1 className='text-Mediumbrown'>total this month</h1>
                  <h1 className='font-extrabold text-[30px] text-Darkbrown'>$478.33</h1>
                </div>
                <div className='flex flex-col justify-center items-end'>
                  <h1 className='font-bold text-Darkbrown'>+2.4%</h1>
                  <h1 className='text-Mediumbrown'>from last month</h1>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default App