import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [s, setS] = useState({
    roll: "", name: "", email: "", branch: "", mobile: ""
  });

  const change = e =>
    setS({ ...s, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();

    if (!/^\d{10}$/.test(s.mobile) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) {
      alert("Invalid email or mobile");
      return;
    }

    setData([...data, s]);
    setS({ roll: "", name: "", email: "", branch: "", mobile: "" });
  };

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={submit}>
        <input name="roll" placeholder="Roll Number" value={s.roll} onChange={change} required /><br />
        <input name="name" placeholder="Name" value={s.name} onChange={change} required /><br />
        <input name="email" placeholder="Email" value={s.email} onChange={change} required /><br />
        <input name="branch" placeholder="Branch" value={s.branch} onChange={change} required /><br />
        <input name="mobile" placeholder="Mobile Number" value={s.mobile} onChange={change} required /><br />
        <button type="submit">Register</button>
      </form>

      <h3>Student Details</h3>
      {data.map((x, i) => (
        <div key={i}>
          Roll: {x.roll}<br />
          Name: {x.name}<br />
          Email: {x.email}<br />
          Branch: {x.branch}<br />
          Mobile: {x.mobile}<hr />
        </div>
      ))}
    </div>
  );
}

export default App;