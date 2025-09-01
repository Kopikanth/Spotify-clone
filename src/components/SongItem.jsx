import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({image,name,desc,id}) => {

    const navigate = useNavigate();
    const {playWithId} = useContext(PlayerContext);

  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]" onClick={()=>{playWithId(id)}}>
      <img src={image} alt="album image" className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;