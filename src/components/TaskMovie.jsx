import ps from '../images/stores/playstation.png'
import steam from '../images/stores/steam.png'
import xbox from '../images/stores/xbox-store.png'

export default function TaskMovie(props){

    const API_IMG = props.BASE_IMG + 'w500/' +props.task.poster_path;
    const vote = props.task.vote_average;
    const score = props.task.score;
    const rating = props.task.rating*2;



    const handleClickMovie=()=>{
        props.ToggleMovie()
        props.actionProfileMovie(props.task)
    }

    
    return(
        <div className="main__movie">          
              {
                (props.task.poster_path != null) ? (
                  <button onClick={handleClickMovie} className="btn"><img src={API_IMG} alt="pictrue" /></button> 
                ) : props.task.image_url != null ? (
                  <button onClick={handleClickMovie} className="btn"><img src={props.task.image_url} alt="pictrue" /></button> 
                ) : props.task.background_image != null ? (
                  <button onClick={handleClickMovie} className="btn"><div className='main__movie--poster' style={{backgroundImage:`url(${props.task.background_image})`}}></div></button>
                ) : (
                  <button onClick={handleClickMovie} className="btn"><div className='main__movie--poster' style={{backgroundImage:`url(${props.task.image_background})`}}></div></button>
                )
              }
              <div className="main__movie--info">
                {
                  (props.task.title != null ) ? (
                    <h3>{props.task.title}</h3>
                  ) : (
                    <h3>{props.task.name}</h3>
                  )
                }
                {
                  vote != null ? (
                    (0 <= vote && vote <= 3.9 ) ? (
                      <div className="red vote"><span>{vote}</span></div>
                    ) : (4<= vote  && vote <= 6.9) ? (
                      <div className="yellow vote"><span>{vote}</span></div>
                    ) : ( 
                      <div className="green vote"><span>{vote}</span></div>
                    )
                  ) : (score != null && props.site !== 'game') ? (
                    (0 <= score && score <= 3.9 ) ? (
                      <div className="red vote"><span>{score}</span></div>
                    ) : (4<= score  && score <= 6.9) ? (
                      <div className="yellow vote"><span>{score}</span></div>
                    ) : ( 
                      <div className="green vote"><span>{score}</span></div>
                    )
                  ) : (
                    (0 <= rating && rating <= 3.9 ) ? (
                      <div className="red vote"><span>{rating}</span></div>
                    ) : (4<= rating  && rating <= 6.9) ? (
                      <div className="yellow vote"><span>{rating}</span></div>
                    ) : ( 
                      <div className="green vote"><span>{rating}</span></div>
                    )
                  )     
                }
              </div>
              {
                (props.task.overview !== "" && props.task.overview != null) ? (
                  <div className="main__movie--overeview" onClick={handleClickMovie}>
                    <h4>Overview</h4>
                    <span>{props.task.overview}</span>
                  </div>
                ) : (
                  (props.site ==='game') ? (
                    <div className="main__movie--store main__movie--overeview ">
                       <div className="store--info">
                          <img src={ps} alt="ps" />
                          <img src={steam} alt="steam" />
                          <img src={xbox} alt="xbox" />
                       </div>                  
                  </div>
                  ) : (
                    <></>
                  )
                )
              }
         </div>
    )
}