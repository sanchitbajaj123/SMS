import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

          body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
          }

          input {
            outline: none;
          }

          .card {
            background: white;
            padding: 30px;
            border-radius: 5px;
            box-shadow: 0 0 40px rgba(0,0,0,0.2);
            min-width: 350px;
          }

          .card h2 {
            text-align: center;
            margin-bottom: 20px;
            font-weight: 700;
          }

          .input-group {
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
          }

          .input-group label {
            font-size: 14px;
            margin-bottom: 5px;
          }

          .input-group input {
            padding: 8px;
            border: 1px solid #004d40;
            border-radius: 3px;
            font-size: 14px;
          }

          .checkbox-group {
            display: flex;
            align-items: center;
            font-size: 14px;
            margin-bottom: 20px;
          }

          .checkbox-group input {
            margin-right: 8px;
          }

          .login-button {
            width: 100%;
            background-color: #00695c;
            color: white;
            border: none;
            padding: 10px;
            font-size: 16px;
            border-radius: 3px;
            cursor: pointer;
          }

          .login-button:hover {
            background-color: #004d40;
          }
        `}
      </style>

      <h1 style={styles.heading}>SALES MANAGEMENT SYSTEM</h1>

      <div className="card">
        <h2>🔒 LOG IN</h2>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="mishaeyecare@mail.com" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="staySignedIn" />
          <label htmlFor="staySignedIn">Stay Signed in</label>
        </div>
        <button  onClick={()=>{alert("WRONG CREDENTIALS")}}className="login-button">🔐 LOG IN</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to bottom, #00695c 50%, #f1f1f1 50%)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    marginBottom: "40px",
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default App;
