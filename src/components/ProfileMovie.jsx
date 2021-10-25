import Arrow from '../images/arrow.png'
import Close from '../images/close.png'
import VideoTraler from './VideoTrailer';
import ps from '../images/stores/playstation1.png'
import steam from '../images/stores/steam1.png'
import xbox from '../images/stores/xbox1.png'



export default function ProfileMovie(props){

    const API_IMG = props.BASE_IMG + 'w500/' + props.movieSelected.poster_path;
    const vote = props.movieSelected.vote_average;
    const score = props.movieSelected.score;
    const rating = props.movieSelected.rating*2;
    const API_BG = props.BASE_IMG + 'original/' +  props.movieSelected.backdrop_path;


    return (
        <div>
         {

           !props.toggleVideo ? (
            <></>
           ) : (
            <div className="backgroundVideo">
                  <div className="slider">
                  {
                    (props.dataVideo.length) !== 0 ? (
                      props.dataVideo.map((item,key) =>
                        <VideoTraler
                          key={key}
                          item={item}     
                          site={props.site}                
                        />
                      )
                    ) : (
                      <h3 className="trailer">The movie has no trailer</h3>
                    )
                  }        

                  </div>
              <img src={Close} alt="close" onClick={props.handleToggleVideo}/>
              </div>
           )
         }
            <button className="arrow-button btn" onClick={props.ToggleMovie}><img src={Arrow} alt="arrow" /></button>

          {
            props.movieSelected.backdrop_path != null ? (
              <div className="header banner" style={{backgroundImage: `url(${API_BG })`}}>
                <div className="header__background" />
              </div>
            ) : props.movieSelected.mal_id != null ? (
              <div className="header banner" style={{backgroundImage: 'url(https://cdn.tgdd.vn//GameApp/-1//mt3-800x450-1.jpg)',backgroundPosition:'center'}}>
            <div className="header__background" />
              </div>
            ) : (
              <div className="header banner" style={{backgroundImage: `url(${props.movieSelected.background_image})`,backgroundPosition:'center'}}>
            <div className="header__background" />
             </div>
            )
          }
        <main>
          <div className="main__movie main__taskmovie">
           {
             (props.movieSelected.poster_path != null) ? (
              <img src={API_IMG} alt={props.movieSelected.title} />
             ) : props.movieSelected.image_url ?  (
              <img src={props.movieSelected.image_url} alt={props.movieSelected.title} />
             ) : (
              <img src={props.movieSelected.background_image} alt={props.movieSelected.title} />
             )
           }
            <div className="main__taskmovie--info">
              {
                props.movieSelected.title != null ? (
                  <h3>{props.movieSelected.title}</h3>
                ) : (
                  <h3>{props.movieSelected.name}</h3>
                )
              }
              <div className="main__taskmovie--vote">
                {
                  (vote != null) ? (
                    (0 <= vote && vote <= 3.9 ) ? (
                      <div className="red vote score"><span>{vote}</span></div>
                    ) : (4<= vote  && vote <= 6.9) ? (
                      <div className="yellow vote score"><span>{vote}</span></div>
                    ) : ( 
                      <div className="green vote score"><span>{vote}</span></div>
                    )
                  ) : (score !=null && props.site !== 'game') ? (
                    (0 <= score && score <= 3.9 ) ? (
                      <div className="red vote score"><span>{score}</span></div>
                    ) : (4<= score  && score <= 6.9) ? (
                      <div className="yellow vote score"><span>{score}</span></div>
                    ) : ( 
                      <div className="green vote score"><span>{score}</span></div>
                    ) 
                  ) : (
                    (0 <= rating && rating <= 3.9 ) ? (
                      <div className="red vote score"><span>{rating}</span></div>
                    ) : (4<= rating  && rating <= 6.9) ? (
                      <div className="yellow vote score"><span>{rating}</span></div>
                    ) : ( 
                      <div className="green vote score"><span>{rating}</span></div>
                    ) 
                  )
                  
                }
                {
                  vote != null ? (
                    <p>{props.movieSelected.vote_count} vote</p>
                  ) : score != null ? (
                    <p>{props.movieSelected.members} members</p>
                  ) : (
                    <p>{props.movieSelected.ratings_count} rating count</p>
                  )
                }
                {
                  (props.movieSelected.id != null && props.site !== 'game') ? (
                    <button className="btn" onClick={(valueID)=>props.onhandleVideo(props.movieSelected.id)} >Video Trailer</button>
                  ) : props.site === 'anime' ? (
                    <button className="btn" onClick={(valueID)=>props.onhandleVideo(props.movieSelected.mal_id)} >Video Trailer</button>
                    ) : props.site === 'manga' ? (
                      <button className="btn" onClick={(value)=>props.onhandleVideo(props.movieSelected.url)} >Go Forum</button>
                    ) : (
                      <button className="btn" onClick={(value)=>props.onhandleVideo(props.movieSelected)} >Short Screenshots</button>
                    )
                }
              </div>
              {
                props.movieSelected.overview != null ? (
                  <div className="main__taskmovie--overview">
                    <h4>Overview</h4>
                    <span>{props.movieSelected.overview}</span>
                  </div>
                ) :props.movieSelected.episodes != null ? (
                  <div className="main__taskmovie--overview main__taskcomics">
                    <div>
                    <h4>Episodes</h4>
                    <span>{props.movieSelected.episodes}</span>
                    </div>
                    <button className="btn" onClick={(value)=>props.actionForum(props.movieSelected.url)}>Go Forum</button>
                  </div>
                ) : props.movieSelected.volumes != null ? (
                  <div className="main__taskmovie--overview main__taskcomics" >
                    <div>
                    <h4>Volumes</h4>
                    <span>{props.movieSelected.volumes}</span>
                    </div>
                  </div>
                ) : (
                  <div className="main__taskmovie--overview main__taskcomics" >
                    <div className="store--info store--profile">
                          <img src={ps} alt="ps" />
                          <img src={steam} alt="steam" />
                          <img src={xbox} alt="xbox" />
                    </div>    
                  </div>
                )
              }
              <div className="main__taskmovie--intro">
                <div className="main__taskmovie--date">
                  <h4>Original Release:</h4>
                  {
                    props.movieSelected.release_date != null ?(
                      <span>{props.movieSelected.release_date}</span>
                    ) : (props.movieSelected.first_air_date != null) ? (
                      <span>{props.movieSelected.first_air_date}</span>
                    ) : props.movieSelected.start_date != null  ? (
                      <span>{props.movieSelected.start_date}</span>
                    ) : (
                      <span>{props.movieSelected.released}</span>
                    )
                  }
                </div>
                <div className="main__taskmovie--popular">
                  {
                    props.movieSelected.popularity != null ? (
                      <>
                        <h4>Popularity:</h4>
                        <span>{props.movieSelected.popularity}</span>
                      </>
                    ) : props.movieSelected.end_date != null ? (
                      <>
                        <h4>End Date:</h4>
                        <span>{props.movieSelected.end_date}</span>
                      </>
                    ) : (
                      <>
                      <h4>Updated:</h4>
                      <span>{props.movieSelected.updated.substring(0,10)}</span>
                    </>
                    )
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}