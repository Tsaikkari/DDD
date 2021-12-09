import React from 'react'

const Video = ({ title, url }) => {
  return (
    <div>
      <iframe title={title} width='477' height='315' src={url}></iframe>
    </div>
  )
}

export default Video
