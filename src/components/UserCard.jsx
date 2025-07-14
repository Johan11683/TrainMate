export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} className="user-card__avatar" />
      <div className="user-card__info">
        <h3>{user.name}</h3>
        <p>{user.distance} km</p>
        <p>
          <strong>Sport :</strong> {user.sport}
        </p>
        <p>
          <strong>Niveau :</strong> {user.level}
        </p>
        <p>
          <strong>But :</strong> {user.goal}
        </p>
        <p>
          <strong>Matériel :</strong> {user.gear}
        </p>
      </div>
    </div>
  );
}
