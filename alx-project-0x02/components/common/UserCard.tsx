import { UserProps } from '@/interfaces'
import exp from 'constants'
import React from 'react'
import { GetStaticProps } from 'next'

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <>
            <h1>Ranked Errors</h1>
            <div className="flex flex-col text-dark bg-gray-500 rounded-lg shadow-lg p-6">
                <h1>{name}</h1>
                <p>{email}</p>
                <span>By user: {address}</span>
            </div>
        </>
    )
}

export default UserCard


export const getStaticProps: GetStaticProps = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        return {
            props: {
                users
            },

            revalidate: 60
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                users: []
            }
        }
    }

}