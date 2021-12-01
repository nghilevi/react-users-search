import { useEffect, useState } from "react"
import { Api, Status } from "../utils/constants"
import { Post, User } from "../utils/model"
import { parseJSON } from "../utils/utils"

export const useData = () => {

    const [posts, setPosts] = useState<Post[]>([])
    const [users, setUsers] = useState<User[]>([])
    const [loadingStatus, setLoadingStatus] = useState(Status.Default)
    const urls = [Api.Posts, Api.Users];

    useEffect(() => {
        setLoadingStatus(Status.Loading)
        Promise.all(urls.map(url =>
            fetch(url)
                .then(parseJSON)
                .catch((err) => setLoadingStatus(Status.Failure))
        ))
            .then(data => {
                setPosts(data[0])
                setUsers(data[1])
                setLoadingStatus(Status.Success)
            })

    }, [])

    return { posts, users, loadingStatus }
}