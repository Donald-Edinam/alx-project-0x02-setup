import Link from 'next/link'
import React from 'react'
import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'

const about = () => {
  return (
   <>
   <Header />
    <h1>This is the about page</h1>
    <Link href="/">Home</Link>
    <Button size="small" shape="rounded-sm ">Small Rounded Button</Button>
    <Button size="medium" shape="rounded-md ">Medium Square Button</Button>
    <Button size="large" shape="rounded-full">Large Pill Button</Button>
   </>
    
  )
}

export default about