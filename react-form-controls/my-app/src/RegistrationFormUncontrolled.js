export default function RegistrationFormUncontrolled() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { username, password } = Object.fromEntries(formData.entries());
    console.log({ username, password });
  };
  return (
    <div className="container">
    <h2>Uncontrolled:</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit" className="button">Sign Up</button>
    </form>
    </div>
  );
}
