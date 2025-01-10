import Link from 'next/link'
import React from 'react'
import Button from '@/components/common/Button'

const about = () => {
  return (
   <>
    <h1>This is the about page</h1>
    <Link href="/">Home</Link>
    <Button size="sm" shape="rounded-sm ">Small Rounded Button</Button>
    <Button size="md" shape="rounded-md ">Medium Square Button</Button>
    <Button size="lg" shape="rounded-full">Large Pill Button</Button>
   </>
    
  )
}

export default about