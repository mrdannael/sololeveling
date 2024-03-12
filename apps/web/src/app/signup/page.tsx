export default function SignupPage() {
  return (
    <form action="localhost:3001/user" method="POST">
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="username" placeholder="Username" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
