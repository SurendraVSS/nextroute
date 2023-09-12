import React from 'react'
import { useRouter } from "next/router"

export default function Demo() {
    const router = useRouter()
    const handleClick = () => {
        // console.log('inside click function, redirect to test page');
        router.push('/Test')
    }
  return (
    <div>
          <p onClick={() => handleClick()}>Page is demo</p>
    </div>
  )
}
