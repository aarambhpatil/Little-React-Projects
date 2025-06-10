import { useState } from "react";
import validator from "validator";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const passwordChange = (password) => {
    console.log(password);
    validate(password);
    setPassword(password);
  };

  const validate = (password) => {
    console.log(password);
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="bg-gray-300 w-screen h-screen">
      <div className="flex w-full flex-col p-10 items-center">
        <h1 className="">Enter a Password</h1>
        <input
          type="password"
          className="bg-white w-100"
          onChange={(e) => {
            passwordChange(e.target.value);
          }}
        />
        {error ? (
          <span className="text-green-500 text-center">Strong Password</span>
        ) : (
          <span className="text-red-500 text-center">Weak Password</span>
        )}
        {error ? (
          <button type="submit">Save Password</button>
        ) : (
          <button type="submit" className="disabled cursor-not-allowed">
            Save Password
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
