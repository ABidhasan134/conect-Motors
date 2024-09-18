import React from 'react'
import img from '../../../../public/Image/111111IMG20230321154822.jpg'
import Image from 'next/image'
const misson = () => {

  return (
    <div>
      {/* <img className='h-[500px] w-[500px]' src={img}></img> */}
      {/* we have to use Image tag for the img */}
      <Image src={img}></Image>
    </div>
  )
}

export default misson
