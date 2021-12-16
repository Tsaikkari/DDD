import React from 'react'
import sun from '../images/sun.png'

export default function Home() {
  return (
    <div
      className='home-container'
      style={{
        backgroundImage: `url(${sun})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    <div className='home-container'>
      <h1 className='homepage-header'>DAILY DOSE OF DOPAMINE</h1>
    </div>
  )
}
