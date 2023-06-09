import React, { useEffect } from "react";
import { FormMaker } from "./components/FormMaker/FormMaker";
import { AUTH_FORM_ID } from "./constants";
import { useAppSelector } from "./hooks";
import { exampleConfig } from "./mock";

function App() {
  const authFormData = useAppSelector((state) => state.formStorage[AUTH_FORM_ID]);

  useEffect(() => {
    console.log("redux", authFormData);
  }, [authFormData]);

  return (
    <div className="App">
      <div className="fade-area">
        <FormMaker label="Auth" id={AUTH_FORM_ID} config={exampleConfig} />
        <div className="button-container">
          <input
            type="submit"
            className="submit"
            form={AUTH_FORM_ID}
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
