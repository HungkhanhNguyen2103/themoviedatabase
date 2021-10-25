import video from '../images/navigation/video.png'
import video1 from '../images/navigation/video1.png';

export default function Title(){
    const handleReload=()=>{
        window.location.reload();
    }

    return(
        <div className="top-panel__logo"><div onClick={handleReload} >M<img src={video} alt="video" className="video" /><img src={video1} alt="video1" className="video1" />vie store</div></div>
    )
}