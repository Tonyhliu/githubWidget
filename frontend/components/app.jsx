import React from 'react';
import UserContainer from './user_list/user_container';

const App = () => (
  <div>
    <div className='flex-container'>
      <h3>Who to follow</h3>
      <small>·</small>
      <small className='refresh-btn'>Refresh</small>
      <small>·</small>
      <small className='viewAll-btn'>View all</small>
    </div>
    <div>
      <UserContainer />
    </div>
  </div>
);

export default App;
