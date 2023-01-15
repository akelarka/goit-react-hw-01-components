import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import users from '../data/user.json';
import data from '../data/data.json';
import friend from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        src={users.avatar}
        name={users.username}
        tag={users.tag}
        location={users.location}
        likes={users.stats.likes}
        views={users.stats.views}
        followers={users.stats.followers}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />
    </>
  );
};
