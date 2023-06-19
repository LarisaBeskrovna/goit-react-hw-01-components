import Profile from './components/Profile/user';
import Statistics from './components/Statistics/statistics';
import FriendsList from './components/FriendList/friendList';
import Transactions from './components/TransactionHistory/Transactions';


import user from './components/Profile/user.json'
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <Profile 
        username={user.username} 
        tag={user.tag} 
        location={user.location} 
        avatar={user.avatar} 
        stats={user.stats}
      />

      <Statistics 
        title="Upload Stats"
        stats={data}
      />

      <FriendsList 
        friends={friends}
      />

      <Transactions 
        items={transactions}
      />
    </>
  );
}

export default App;