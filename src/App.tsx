

import { useData } from './hooks/useData';
import { Status } from './utils/constants';
import UserSearch from './components/UserSearch';

function App() {

  const { posts, users, loadingStatus } = useData()

  return (
    <div className="app">
      <div>{loadingStatus === Status.Loading ? 'Loading data ...' : <UserSearch postsData={posts} usersData={users} />}</div>
    </div>
  );
}

export default App;
