import { useState } from 'react';
import { filterList } from '../utils/utils';
import './UsersSearch.scss'
import ListSearch from './ListSearch/ListSearch';
import { UsersSearchText } from '../utils/constants';

interface UsersSearchProps {
  postsData: any[], usersData: any[]
}

function UsersSearch({ postsData, usersData }: UsersSearchProps) {

  const [userId, setUserId] = useState<number>(-1)
  const [users, setUsers] = useState<any[]>(usersData)
  const [posts, setPosts] = useState<any[]>(postsData)
  const [postsByUser, setPostsByUser] = useState<any[]>([])

  const onUserClicked = (item: any) => {
    const filteredPosts = filterList(postsData, 'userId', item.id)
    setUserId(item.id)
    setPostsByUser(filteredPosts)
    if (postsData) {
      setPosts(filteredPosts)
    }
  }

  const onUsersSearch = (filterString: string) => {
    if (usersData) {
      const filteredUsers = filterList(usersData, 'name', filterString)
      setUsers(filteredUsers)
    }
  }

  const onPostSearch = (filterString: string) => {
    const filteredPosts = filterList(postsByUser, 'title', filterString)
    setPosts(filteredPosts)
  }

  return (
    <>
      <h1 className="app-header">{UsersSearchText.SelectedUserId} {userId >= 1 ? userId : UsersSearchText.NoSelection}</h1>
      <ListSearch
        listItems={users}
        displayField='name'
        onClick={onUserClicked}
        onSearch={onUsersSearch}
      />
      {userId >= 1 ?
        <ListSearch
          listItems={posts}
          displayField='title'
          onSearch={onPostSearch}
        /> :
        <div className="text-container">
          <span className="default-text">{UsersSearchText.SelectUser}</span>
        </div>
      }
    </>
  );
}

export default UsersSearch;
