export default function Login() {
  return (
    <section>
      <h1>Connexion</h1>
      <form>
        <label>
          Email
          <input type="email" placeholder="ton@email.com" />
        </label>
        <label>
          Mot de passe
          <input type="password" placeholder="••••••••" />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </section>
  );
}
