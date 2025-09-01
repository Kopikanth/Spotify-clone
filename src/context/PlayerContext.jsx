import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: "00",
            minute: 0
        }
    });

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async(id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async() => {
        
        if (track.id<1) return;
        await setTrack(songsData[track.id-1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const next = async() =>{
        if (track.id>6) return;
        await setTrack(songsData[track.id+1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const shuffle = async() => {
        const randomNum = Math.floor(Math.random()*8);
        await setTrack(songsData[randomNum]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const [loop, setLoop] = useState(false);

    const seekSong = (e) =>{
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
        audioRef.current.play();
        setPlayStatus(true);
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime) / Math.floor(audioRef.current.duration)) * 100 + "%";
                
            }
            
        }, 1000);
        if (loop && (audioRef.current.currentTime == audioRef.current.duration)){
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }
    })

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        previous,
        next,
        shuffle,
        loop, setLoop,
        seekSong
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;