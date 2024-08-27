'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

const Project = () => {
  const router = useParams()

  return (
    <section>
      <div>
        <h1>Test name</h1>
        <div>
          {/* <Image /> */}
        </div>
      </div>
    </section>
  )
}

export default Project