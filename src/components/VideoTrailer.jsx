import { useEffect, useState } from "react"

export default function VideoTraler(props){

    const [url,setUrl] = useState()

    useEffect(()=>{

        if(props.item.key == null && props.site === 'anime' ){
            const URL = props.item.video_url.replace('www.youtube.com','www.youtube-nocookie.com')
            setUrl(URL.replace('autoplay=1',''))
        }
    },[props.item.key,props.item.video_url,props.site])


    return (
        <>
        {
            props.item.site === 'YouTube' ? (
                <div><iframe src={`https://www.youtube-nocookie.com/embed/${props.item.key}`} title={props.item.name} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
            ) :( props.item.site == null && props.site !== 'game') ? (
                <div><iframe width={700} height={500} src={url} title={props.item.name} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
            ) : (
                <div className="screen-short"><img src={props.item.image} alt="short" /></div>
            )
        }
        </>   
    )
}