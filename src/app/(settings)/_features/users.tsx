'use client'

import { User } from "@/type"
import { getUser } from "@/utils/userRequests"
import { useEffect, useState } from "react"

export const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const fetchUsers = async () => {
        setLoading(true);

        try {
            const usersData = await getUser();
            setUsers(usersData);

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message || "An unknown error occurred.");
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {users.map((user) => (
                <div key={user._id}>
                    {user.email} {user.role}
                </div>
            ))}
        </div>
    )
}