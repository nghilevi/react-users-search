import { render } from "@testing-library/react"
import { Posts, Users } from "../test/mock.test"
import { Post, User } from "../utils/model"
import UsersSearch from "./UsersSearch"

describe('UsersSearch', () => {

    let postsData: Post[]
    let usersData: User[]

    const setup = (postsData: Post[], usersData: User[]) => {
        render(<UsersSearch postsData={postsData} usersData={usersData}/>)
    }
    
    beforeEach(() => {
        postsData = Posts.slice(0, 3) // get a shallow copy of the array
        usersData = Users.slice(0, 3)
    })

    // DISPLAYING
    describe('by default', () => {

        it('should display NoSelection text', () => {

        })

        it('should display list of users', () => {

        })

    })

    // EVENTS HANDLER
    describe('on user clicked', () => {

        it('should display selected user id', () => {

        })

        it('should display list of user post', () => {

        })

    })
    
})