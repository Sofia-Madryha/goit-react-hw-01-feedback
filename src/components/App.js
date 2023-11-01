import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import data  from "../data/data.json";
import { Statistics } from "./Statistic/Statistics";
import  friends  from "../data/friends.json";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./Transactions/Transactions";
import transactions from "../data/transactions.json";

export const App = () => {
  return <div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
     <Statistics stats={data}/>
     <FriendList friends={friends}/>
     <TransactionHistory transactions={transactions}/>
  </div>
};