import { useState } from "react";
import Loading from "./components/Loading";
import Personal from "./components/Personal";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Personal />
    </main>
  );
}

export default App;
