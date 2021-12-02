import { useEffect, useState } from "react"
import { Api, Status } from "../utils/constants"
import { Post, User } from "../utils/model"
import { parseJSON } from "../utils/utils"

export const useData = () => {

    const [posts, setPosts] = useState<Post[]>([])
    const [users, setUsers] = useState<User[]>([])
    const [loadingStatus, setLoadingStatus] = useState(Status.Default)

    useEffect(() => {
        setLoadingStatus(Status.Loading)
        Promise.all([Api.Posts, Api.Users].map(url =>
            fetch(url)
                .then(parseJSON)
                .catch((err) => setLoadingStatus(Status.Failure))
        ))
        .then(data => {
            setPosts(data[0])
            setUsers(data[1])
            setLoadingStatus(Status.Success)
        })
        .catch((err) => setLoadingStatus(Status.Failure))
    }, [])

    return { posts, users, loadingStatus }
}