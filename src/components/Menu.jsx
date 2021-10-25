import comics from "../images/navigation/comics.png";
import comics1 from "../images/navigation/comics1.png";
import movie from "../images/navigation/movies.png"
import movie1 from "../images/navigation/movies1.png"
import game from "../images/navigation/game.png";
import game1 from "../images/navigation/game1.png"
import game2 from "../images/navigation/game2.png"
import tv from "../images/navigation/tv.png"
import tv1 from "../images/navigation/tv1.png"
import more from "../images/navigation/more.png"
import more1 from "../images/navigation/more1.png"
import close from '../images/x.png'

export default function Menu(props){

    //category

    //comics
    const COMICS_BASE_URL = 'https://api.jikan.moe/v3'
    const AN_URL =  {
        URL : `${COMICS_BASE_URL}/top/anime/1/bypopularity`,
        title : 'Top Anime Ranking',
        site : 'anime'
    }
    const MAN_URL = {
        URL :  `${COMICS_BASE_URL}/top/manga/1/bypopularity`,
        title : 'Top Manga Ranking',
        site : 'manga'
    }


    //movie
    const MOST_POPULAR = {
            URL :'/discover/movie?sort_by=popularity.desc',
            title : 'The Most Popular',
            site : 'movie'
        }
    const RATED_R = {
         URL : '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc',
         title :  'The Highest Rated R',
         site : 'movie'
        };
    const IN_THEATRES = {
         URL : '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22',
         title :  'The Movie In Theatres',
         site : 'movie'
        };
    const BEST_DRAMA = {
         URL : '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10',
         title :  "The Best Drama's ",
         site : 'movie'
        };

    //tv
    const ON_THE_AIR = {
        URL :'/tv/on_the_air',
        title : 'TV Show On The Air',
        site : 'tv',
    };    
    const AIRING_TODAY = {
        URL :'/tv/airing_today',
        title : 'TV Show Airing Today',
        site : 'tv',
    };    
    const TV_MOST_POPULAR = {
        URL :'/tv/popular',
        title : 'TV Show Most Popular',
        site : 'tv',
    };    
    const TOP_RATED = {
        URL :'/tv/top_rated',
        title : 'Top Rated TV Show',
        site : 'tv',
    }
    // Game
    const METACRITIC_RATINGS ={
        URL : 'https://api.rawg.io/api/games?metacritic=80,100&key=de5546150ede4a3a97d865bfda75d85b&page=',
        title : 'Metacritic Ratings',
        site : 'game',
    }
    const ANTICIPATED_UPCOMING = {
        URL : 'https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added&key=de5546150ede4a3a97d865bfda75d85b&page=',
        title : 'Most Anticipated Upcoming 2020',
        site : 'game',
    }
    const GAME_MOST_POPULAR = {
        URL :'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&key=de5546150ede4a3a97d865bfda75d85b&page=',
        title : 'The Most Popular Games In 2019',
        site : 'game',
    };
    const HIGHEST_RATED = {
        URL :'https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating&key=de5546150ede4a3a97d865bfda75d85b&page=',
        title : 'The Highest Rated Games From 2001',
        site : 'game',
    };


    return(
        <>
        <ul className="top-panel__navigation">
              <li className="top-panel__comics"><button><img src={comics} alt="comics" className="comics" /><img src={comics1} alt="comics1" className="comics1" /></button><div className="top-panel__text"><span>comics</span></div>
              <ul className="top-panel__movie--layer top-panel__comics--layer">
                  <li><button className="btn" onClick={(value)=>props.actionCategory(AN_URL)}>Anime</button></li>
                  <li><button className="btn" onClick={(value)=>props.actionCategory(MAN_URL)}>Manga</button></li>
              </ul>
              </li>
              <li className="top-panel__movie"><button><img src={movie} alt="movie" className="movie" /><img src={movie1} alt="movie1" className="movie1" /></button><div className="top-panel__text"><span>movies</span></div>
              <ul className="top-panel__movie--layer">
                  <li><button className="btn" onClick={(value)=>props.handleDiscover(MOST_POPULAR)}>Most Popular</button></li>
                  <li><button className="btn" onClick={(value)=>props.handleDiscover(RATED_R)}>Highest Rated R</button></li>
                  <li><button className="btn" onClick={(value)=>props.handleDiscover(IN_THEATRES)}>Movie In Theatres</button></li>
                  <li><button className="btn" onClick={(value)=>props.handleDiscover(BEST_DRAMA)}>Best Drama's</button></li>
              </ul>
              </li>          
              <li className="top-panel__game"><button ><img src={game} alt="game" className="game" /><img src={game1} alt="game1" className="game1" /><img src={game2} alt="game2" className="game2" /></button><div className="top-panel__text"><span>game</span></div>
              <ul className="top-panel__movie--layer top-panel__game--layer">
                  <li><button className="btn" onClick={(value)=>props.handleToGame(METACRITIC_RATINGS)}>Metacritic Ratings</button></li>
                  <li><button className="btn" onClick={(value)=>props.handleToGame(ANTICIPATED_UPCOMING)}>Most Anticipated Upcoming</button></li>
                  <li><button className="btn" onClick={(value)=>props.handleToGame(GAME_MOST_POPULAR)}>Most Popular</button></li>
                  <li><button className="btn" onClick={(value)=>props.handleToGame(HIGHEST_RATED)}>Highest Rated</button></li>
              </ul>
              </li>
              <li className="top-panel__tv "><button><img src={tv} alt="tv" className="tv" /><img src={tv1} alt="tv1" className="tv1" /></button><div className="top-panel__text"><span>tv</span></div>
              <ul className="top-panel__movie--layer top-panel__tv--layer">
                  <li><button className="btn" onClick={(value)=>props.handleTVShow(ON_THE_AIR)}>On The Air</button></li>
                  <li><button className="btn" onClick={(value)=>props.handleTVShow(AIRING_TODAY)}>Airing Today</button></li>
                  <li><button className="btn" onClick={(value)=>props.handleTVShow(TV_MOST_POPULAR)}>Most Popular</button></li>
                  <li><button className="btn" onClick={(value)=>props.handleTVShow(TOP_RATED)}>Top Rated</button></li>
              </ul>
              </li>
              <li className="top-panel__more"><button><img src={more} alt="more" className="more" /><img src={more1} alt="more1" className="more1" /></button><div className="top-panel__text"><span>more</span></div></li>
        </ul>
        <div className={!props.toggleHidden ? ("background__menu hidden") : ("background__menu")} ></div>
        <div className={!props.toggleHidden ? ("background__media hidden") : ("background__media")}  >
        <img src={close} alt="close" onClick={props.handleMenu}/>    
        <ul className="top-panel__navigation top-panel__media">
        <li className="top-panel__comics"><button><img src={comics} alt="comics" className="comics" /><img src={comics1} alt="comics1" className="comics1" /></button><div className="top-panel__text top-panel__text--comics"><span>comics</span></div>
        <ul className="top-panel__movie--layer top-panel__comics--layer">
            <li><button className="btn" onClick={(value)=>props.actionCategory(AN_URL)}>Anime</button></li>
            <li><button className="btn" onClick={(value)=>props.actionCategory(MAN_URL)}>Manga</button></li>
        </ul>
        </li>
        <li className="top-panel__movie"><button><img src={movie} alt="movie" className="movie" /><img src={movie1} alt="movie1" className="movie1" /></button><div className="top-panel__text"><span>movies</span></div>
        <ul className="top-panel__movie--layer">
            <li><button className="btn" onClick={(value)=>props.handleDiscover(MOST_POPULAR)}>Most Popular</button></li>
            <li><button className="btn" onClick={(value)=>props.handleDiscover(RATED_R)}>Highest Rated R</button></li>
            <li><button className="btn" onClick={(value)=>props.handleDiscover(IN_THEATRES)}>Movie In Theatres</button></li>
            <li><button className="btn" onClick={(value)=>props.handleDiscover(BEST_DRAMA)}>Best Drama's</button></li>
        </ul>
        </li>          
        <li className="top-panel__game"><button ><img src={game} alt="game" className="game" /><img src={game1} alt="game1" className="game1" /><img src={game2} alt="game2" className="game2" /></button><div className="top-panel__text top-panel__text--game"><span>game</span></div>
        <ul className="top-panel__movie--layer top-panel__game--layer">
            <li><button className="btn" onClick={(value)=>props.handleToGame(METACRITIC_RATINGS)}>Metacritic Ratings</button></li>
            <li><button className="btn" onClick={(value)=>props.handleToGame(ANTICIPATED_UPCOMING)}>Most Anticipated Upcoming</button></li>
            <li><button className="btn" onClick={(value)=>props.handleToGame(GAME_MOST_POPULAR)}>Most Popular</button></li>
            <li><button className="btn" onClick={(value)=>props.handleToGame(HIGHEST_RATED)}>Highest Rated</button></li>
        </ul>
        </li>
        <li className="top-panel__tv "><button><img src={tv} alt="tv" className="tv" /><img src={tv1} alt="tv1" className="tv1" /></button><div className="top-panel__text"><span>tv</span></div>
        <ul className="top-panel__movie--layer top-panel__tv--layer">
            <li><button className="btn" onClick={(value)=>props.handleTVShow(ON_THE_AIR)}>On The Air</button></li>
            <li><button className="btn" onClick={(value)=>props.handleTVShow(AIRING_TODAY)}>Airing Today</button></li>
            <li><button className="btn" onClick={(value)=>props.handleTVShow(TV_MOST_POPULAR)}>Most Popular</button></li>
            <li><button className="btn" onClick={(value)=>props.handleTVShow(TOP_RATED)}>Top Rated</button></li>
        </ul>
        </li>
        <li className="top-panel__more"><button><img src={more} alt="more" className="more" /><img src={more1} alt="more1" className="more1" /></button><div className="top-panel__text"><span>more</span></div></li>
        </ul>
        </div>
        </>
    )
}