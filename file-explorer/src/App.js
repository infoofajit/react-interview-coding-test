import { useState } from "react"
import Folder from "./components/Folder";
import { explorer as explorerData } from "./constants/explorer";

function App() {
  const [explorer, setExplorer] = useState(explorerData)

  return (
    <div className="app w-72">
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
