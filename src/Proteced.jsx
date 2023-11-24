function Proteced({ handleLogout }) {
    return (
      <div>
        <h1>Protected</h1>
        <p>This is the protected page.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  export default Proteced;