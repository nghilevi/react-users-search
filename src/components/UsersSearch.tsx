import { useState } from 'react';
import { filterList } from '../utils/utils';
import './UsersSearch.scss'
import ListSearch from './ListSearch/ListSearch';
import { UsersSearchText } from '../utils/constants';
import { Post, User } from '../utils/model';

interface UsersSearchProps {
  postsData: Post[], usersData: User[]
}

function UsersSearch({ postsData, usersData }: UsersSearchProps) {

  const [userId, setUserId] = useState<number>(-1)
  const [posts, setPosts] = useState<Post[]>(postsData)

  const onUserClicked = (item: any) => {
    const filteredPosts = filterList(postsData, 'userId', item.id)
    setUserId(item.id)
    if (postsData) {
      setPosts(filteredPosts)
    }
  }

  return (
    <>
      <h1 className="app-header">{UsersSearchText.SelectedUserId} {userId >= 1 ? userId : UsersSearchText.NoSelection}</h1>
      <ListSearch
        listItems={usersData}
        displayField='name'
        onClick={onUserClicked}
      />
      {userId >= 1 ?
        <ListSearch
          listItems={posts}
          displayField='title'
        /> :
        <div className="text-container">
          <span className="default-text">{UsersSearchText.SelectUser}</span>
        </div>
      }
    </>
  );
}

export default UsersSearch;
