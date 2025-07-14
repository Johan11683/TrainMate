import UserCards from '../components/UserCards';
import { mockUsers } from '../datas/mockUsers';

export default function Home() {
  return (
    <main>
      <h1>Bienvenue sur TrainMate</h1>
      <UserCards users={mockUsers} />
    </main>
  );
}
