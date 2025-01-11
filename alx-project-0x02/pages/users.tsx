import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header'
import { UserProps } from '@/interfaces'
import React from 'react'

interface Props {
  users: UserProps[]
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div className="p-4">
        <Header />
      <h1 className="text-2xl font-bold mb-4">Ranked Users</h1>
      
      <div className="space-y-4">
        {users.map((user) => (
          <UserCard key={user.email} name={user.name} email={user.email}/>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
      props: {
        users,
      },
      // Revalidate every hour
      revalidate: 3600,
    }
  } catch (error) {
    console.error('Error fetching users:', error)
    return {
      props: {
        users: [],
      },
    }
  }
}

export default Users