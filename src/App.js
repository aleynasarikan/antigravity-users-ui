import "./App.css";

const users = [
  { id: 1, name: "Aleyne Sarikan", role: "Admin", status: "Active" },
  { id: 2, name: "Andrew Bojangles", role: "Designer", status: "Active" },
  { id: 3, name: "Hailey Bieber", role: "Manager", status: "Inactive" },
];

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Imperium</h2>
        <nav>
          <a className="active">Users</a>
          <a>Media</a>
          <a>Profile</a>
        </nav>
      </aside>

      <main className="main">
        <header className="header">
          <h1>Users</h1>
          <button className="btn">Invite</button>
        </header>

        <div className="stats">
          <div className="stat">
            <h3>12</h3>
            <p>People</p>
          </div>
          <div className="stat">
            <h3>5</h3>
            <p>Departments</p>
          </div>
          <div className="stat">
            <h3>0</h3>
            <p>Guests</p>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.role}</td>
                <td>
                  <span className={`status ${u.status.toLowerCase()}`}>
                    {u.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}