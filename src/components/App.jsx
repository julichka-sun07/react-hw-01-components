// import PropTypes from 'prop-types';
import { Profile } from './profileApp/profile';
import user from '../data/user.json';
import { Statistics } from './statisticsApp/data';
import data from '../data/data.json';
import { FriendList } from './friendsApp/friends';
import friends from '../data/friends.json';
import { TransactionHistory } from './transactionHistory/transaction';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
