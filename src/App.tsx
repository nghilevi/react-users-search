

import { useData } from './hooks/useData';
import { LoadingStatusText, Status } from './utils/constants';
import UsersSearch from './components/UsersSearch';

function App() {

  const { posts, users, loadingStatus } = useData()

  const renderApp = () => {
    console.log('posts: ',posts,'users: ',users)
    if(loadingStatus === Status.Loading){
      return <>{LoadingStatusText.Loading}</>
    }else if(loadingStatus === Status.Failure){
      return <>{LoadingStatusText.Failure}</>
    }else{
      if(users) {
        return <UsersSearch postsData={posts} usersData={users} />
      }else{
        return <>{LoadingStatusText.UsersLoadFail}</>
      }
    }
  }

  return (
    <div className="app">
      <div>{renderApp()}</div>
    </div>
  );
}

export default App;
