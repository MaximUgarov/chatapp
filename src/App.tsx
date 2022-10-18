import { useEffect } from "react";

import Chat from "Chat";
import { useActions } from "store";



function App() {
  const { startConnecting } = useActions();

  useEffect(() => {
    startConnecting();
  }, []);

  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
