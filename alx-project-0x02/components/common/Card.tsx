import React from 'react'
import { type CardProps } from '@/interfaces';


const Card = ({ title, content }: CardProps) => {
    return (
       <div className="flex-flex-col text-dark bg-gray-500 rounded-lg shadow-lg p-6">
          <h1>{title}</h1>
          <p>{content}</p>
       </div>
    )
}

export default Card