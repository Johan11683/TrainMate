import { mockUsers } from '../datas/mockUsers';
import UserCard from '../components/UserCard';

export default function UserCards() {
  return (
    <section className="user-cards">
      <h2>Les TrainMates</h2>

      <div className="user-cards__container">
        {mockUsers.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
    </section>
  );
}
