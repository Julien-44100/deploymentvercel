import "./App.css";

function App() {
  return (
    <>
      <section>
        <form>
          <h1>salut</h1>
          <label htmlFor="name">Name (4 to 8 characters):</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={4}
            maxLength={8}
            size={10}
          />
        </form>
        <h2> bonjour</h2>
      </section>
    </>
  );
}

export default App;
