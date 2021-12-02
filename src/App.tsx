

import { useData } from './hooks/useData';
import { LoadingStatusText, Status } from './utils/constants';
import UserSearch from './components/UserSearch';

function App() {

  const { posts, users, loadingStatus } = useData()

  const renderApp = () => {
    if(loadingStatus === Status.Loading){
      return <>{LoadingStatusText.Loading}</>
    }else if(loadingStatus === Status.Failure){
      return <>{LoadingStatusText.Failure}</>
    }else{
      if(users) {
        return <UserSearch postsData={posts} usersData={users} />
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
