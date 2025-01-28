import React, { useState } from "react";

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLoginLogout}>Logout</button>
      ) : (
        <button onClick={handleLoginLogout}>Login</button>
      )}
    </div>
  );
}

export default LoginLogout;
