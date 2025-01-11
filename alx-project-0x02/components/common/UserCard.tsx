import { UserProps } from '@/interfaces'
import React from 'react'

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <>
            <div className="flex flex-col text-dark bg-gray-500 rounded-lg shadow-lg p-6">
                <h1>{name}</h1>
                <p>{email}</p>
                {/* <span>By user: {address}</span> */}
            </div>
        </>
    )
}

export default UserCard