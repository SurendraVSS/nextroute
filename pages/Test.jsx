import React from 'react'
import { useRouter } from "next/router"

export default function Test() {
    const router = useRouter()
    const handleClick = () => {
       // console.log('inside click function, redirect to test page');
        router.push('/Demo')
    }
  return (
    <div>
          <p onClick={() => handleClick()}>Page is test</p>
    </div>
  )
}
