

import { useData } from './hooks/useData';
import { Status } from './utils/constants';
import UserSearch from './components/UserSearch';

function App() {

  const { posts, users, loadingStatus } = useData()

  const renderApp = () => {
    if(loadingStatus === Status.Loading){
      return <>Loading data ...</>
    }else if(loadingStatus === Status.Failure){
      return <>Data loaded failed. Please try again</>
    }else{
      if(users) {
        return <UserSearch postsData={posts} usersData={users} />
      }else{
        return <>Users loaded failed. Please try again</>
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
