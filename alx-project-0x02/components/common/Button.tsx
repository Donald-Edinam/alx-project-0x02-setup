import { ButtonProps } from '@/interfaces'
import React from 'react'
import '@/styles/styles/button.css'

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    size = 'md',
    shape = 'rounded-md',
    className
}) => {
  return (
    <button
    className={
        `${shape} ${size === 'sm' ? 'py-1 px-2 text-sm' : size === 'md' ? 'py-2 px-4' : 'py-3 px-6'} ${className} custom-button`
    }
    onClick={onClick}
    >{children}</button>
  )
}

export default Button