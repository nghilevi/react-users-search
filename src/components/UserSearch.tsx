import { useState } from 'react';
import { filterList } from '../utils/utils';
import './UserSearch.scss'
import ListSearch from './ListSearch/ListSearch';

interface UserSearchProps {
  postsData: any[], usersData: any[]
}

function UserSearch({ postsData, usersData }: UserSearchProps) {

  const [userId, setUserId] = useState<number>(-1)
  const [users, setUsers] = useState<any[]>(usersData)
  const [posts, setPosts] = useState<any[]>(postsData)
  const [postsByUser, setPostsByUser] = useState<any[]>([])

  const onUserClicked = (item: any) => {
    const filteredPosts = filterList(postsData, 'userId', item.id)
    setUserId(item.id)
    setPosts(filteredPosts)
    setPostsByUser(filteredPosts)
  }

  const onUserSearch = (filterString: string) => {
    const filteredUsers = filterList(usersData, 'name', filterString)
    setUsers(filteredUsers)
  }

  const onPostSearch = (filterString: string) => {
    const filteredPosts = filterList(postsByUser, 'title', filterString)
    setPosts(filteredPosts)
  }

  return (
    <>
      <h1 className="app-header">Selected user id: {userId >= 1 ? userId : 'None'}</h1>
      <ListSearch
        listItems={users}
        displayField='name'
        onClick={onUserClicked}
        onSearch={onUserSearch}
      />
      {userId >= 1 ?
        <ListSearch
          listItems={posts}
          displayField='title'
          onSearch={onPostSearch}
        /> :
        <div className="text-container">
          <span className="default-text">Please select user</span>
        </div>
      }
    </>
  );
}

export default UserSearch;
