import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

const App = () => {

  return (
    <div className="bg-black h-screen">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio preload="auto"></audio>
    </div>
  );
};

export default App;