import { useState,useEffect } from 'react';
import Menu from './components/Menu';
import Movie from './components/Movie';
import Profile from './components/Profile';
import Search from './components/Search';
import Title from './components/Title';
import ProfileMovie from './components/ProfileMovie';
import Page from './components/Page';

function App() {




  //language
  const [language,setLanguage] = useState('en')



  //discover
  const [discoverMovie,setDiscoverMovie] = useState('/discover/movie?sort_by=popularity.desc')

  //title
  const [title,setTitle] = useState('The Most Popular')

  //toggle Video
  const [toggleVideo,setToggleVideo] = useState(false)

  //site
  const [site,setSite] = useState('movie')

  //data Video
  const [dataVideo,setDataVideo] = useState([])

  //page
  const [page,setPage] = useState(1)


  //prevPage
  const [togglePrev,setTogglePrev] = useState(false)

  //nextPage
  const [toggleNext,setToggleNext] = useState(true)

  //ToggleTitle Search
  const [toggleSearch,setToggleSearch] = useState(false)

  //dataSearch
  const [dataSearch,setDataSearch] = useState({
    dataResults : 0,
    dataPage : 0,
  })

  //trang thai ket qua search
  const [isLoad,setIsLoad] = useState({
    isMovie : true,
    isTV : false,
    isGame : false,
  })


  //data
  const API_KEY ='api_key=3b755aa51b44a21c7caae4798f5b929d&language=';
  const BASE_URL ='https://api.themoviedb.org/3';
  const API_URL = BASE_URL + discoverMovie + '&' + API_KEY + language + '&page=' + page;

  //data game
  // const GAME_BASE_URL = 'https://api.rawg.io/api/'
  // const GAME_API_KEY ='?key=de5546150ede4a3a97d865bfda75d85b&page=1'

  //data search
  const SEARCH_URL = BASE_URL + `/search/${site}?` + API_KEY ; 

  const API_GAME_SEARCH = 'https://api.rawg.io/api/games?search='

  const [APIGame,setAPIGame] = useState()


  //API
  const [API,setAPI] = useState(API_URL)

 //poster
  const BASE_IMG = 'https://image.tmdb.org/t/p/'

  //searchText
  const [text,setText] = useState()
  
  //background
  const [background,setBackground] = useState() ;

  // const [isLoaded,setIsLoaded] = useState(false)
  const [dataMovie,setDataMovie] = useState([])

  //isProfileMovie - tung bo phim mot
  const [isloadMovie,setloadMovie] = useState(false)

  //ProfileMovieSelected
  const [movieSelected,setMovieSected] = useState()

  const [toggleHidden,setToggleHidden] = useState(false)


  const handleLanguage=(e)=>{
    setLanguage(e.target.value)
  }

  const handleDiscover=(value)=>{
    setToggleHidden(false)
    setPage(1)
    setToggleSearch(false)
    setloadMovie(false)
    setToggleNext(true)
    setDiscoverMovie(value.URL)
    setAPI(BASE_URL + value.URL + '&' + API_KEY + language)
    setTitle(value.title)
    setSite(value.site)
  }
  
  //chuyen ngon ngu
  const handleChange=(e)=>{
    setToggleSearch(false)
    e.preventDefault(); 
    document.getElementById('input-search').value="";
    setSite('movie')
    setDiscoverMovie('/discover/movie?sort_by=popularity.desc')
    setAPI(BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY + language + '&page=1' )
    setloadMovie(false)
    setTitle('The Most Popular')
    setSite('movie')
    setPage(1)
    setToggleNext(true)

  }

  //chuyen sang comics
  const actionCategory=(value)=>{
    setToggleHidden(false)
    setToggleSearch(false)
    setloadMovie(false)
    document.getElementById('input-search').value="";
    setTitle(value.title)
    setSite(value.site)
    setToggleNext(false)
    setPage(1)
    setTogglePrev(false)
    fetch(value.URL).then(res => res.json())
    .then(data=>{
      // console.log(data.top);
      setDataMovie(data.top)    
   })
    .catch(err=>{
         console.log(err);
    })
  }

  const actionForum=(value)=>{
    window.location.assign(value)
  }

  const handleTVShow=(value)=>{
    // console.log(value);
    setToggleHidden(false)
    setToggleSearch(false)
    setDiscoverMovie(value.URL)
    setToggleNext(true)
    setPage(1)
    setAPI(BASE_URL + value.URL + '?' + API_KEY + language)
    setTitle(value.title)
    setSite(value.site)
    setloadMovie(false)
  }

  const handleToGame=(value)=>{
    setToggleHidden(false)
    setToggleSearch(false)
    setloadMovie(false)
    setPage(1)
    setTitle(value.title)
    setSite(value.site)
    setAPIGame(value.URL)
    fetch(`${value.URL}1`).then(res=> res.json())
    .then(data=>{
      console.log(data);
      setDataMovie(data.results);
      setBackground(data.results[Math.floor(Math.random()*data.results.length)].background_image)
    })
    .catch(err=>{
      console.log(err);
    })
  }



   useEffect(()=>{
        fetch(API).then(res => res.json())
      .then(data=>{
        // console.log(data);
        if(site === 'movie' || site === 'tv' || site === 'game') setDataMovie(data.results)
        if(site === 'movie' || site === 'tv'){     
          setDataSearch({
            dataResults : data.total_results,
            dataPage : data.total_pages,
          })
        if(data.total_results === 0) {
          setDataMovie([])
          setToggleNext(false)
          setToggleSearch(true)
        }     
        // setPage(data.page)
        if(data.total_pages === data.page) setToggleNext(false)
        else if(data.page === 1) setTogglePrev(false)
        else {
          setToggleNext(true)
          setTogglePrev(true)
        }
        }
        if (site === 'game' && data.count !== undefined){
          setDataSearch({
            dataResults : data.count,
            dataPage : 0,
          })
          if(20*page <= data.count) setToggleNext(true)
          else setToggleNext(false)
          if(page === 1) setTogglePrev(false)
          else setTogglePrev(true)
        } 
        
        if(data.results[Math.floor(Math.random()*data.results.length)].backdrop_path !== undefined)  setBackground(BASE_IMG + 'original/' +  data.results[Math.floor(Math.random()*data.results.length)].backdrop_path);
        else if(data.results[Math.floor(Math.random()*data.results.length)].background_image !== undefined) setBackground(data.results[Math.floor(Math.random()*data.results.length)].background_image)
        else setBackground('https://we-play.live/uploads/backdrop/avatar-backdrop-1602423166.jpeg');
     })
      .catch(err=>{
           console.log(err);
      })
  },[API,site,page])


  const ToggleMovie=()=>{
    setloadMovie(!isloadMovie)
  }

  const actionProfileMovie=(task)=>{
    setMovieSected(task)
  }



  const handleToggleVideo=()=>{
    setToggleVideo(!toggleVideo)
  }

  const onhandleVideo=(value)=>{
    setToggleVideo(!toggleVideo)

    if(site === 'anime' ){
       fetch(`https://api.jikan.moe/v3/anime/${value}/videos`).then(res => res.json())
       .then(data=>{
          //  console.log(data);
          setDataVideo(data.promo)
       })
       .catch(err=>{
         console.log(err);
       })
    }
    else if(site ==='manga'){
      setToggleVideo(false)
      window.location.assign(value)
    }
    else if(site === 'game'){
       setDataVideo(value.short_screenshots)
    }
    else {
      fetch(`https://api.themoviedb.org/3/${site}/${value}/videos?api_key=3b755aa51b44a21c7caae4798f5b929d`).then(res => res.json())
      .then(data =>{  
        setDataVideo(data.results)
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }

  const actionSearch=(e)=>{
    // console.log(e.target.value);
    setText(e.target.value)
    if(e.target.value === '' ) setText(undefined)
  }

  //chuyen ket qua tim kiem
  const handleClickSearch=(value)=>{
    
    // console.log(value);
    if(text !== undefined){
      setSite(value);
      if(value === 'movie' || value === 'tv') setAPI(BASE_URL + `/search/${value}?` + API_KEY + '&query=' + text);
      if(value === 'game') setAPI(API_GAME_SEARCH + text + '&key=de5546150ede4a3a97d865bfda75d85b')
    }
    if(value === 'movie') {
      setIsLoad({
        isMovie : true,
        isTV : false,
        isGame : false,
      })
      }
     else if(value === 'tv') {
      setIsLoad({
        isMovie : false,
        isTV : true,
        isGame : false,
      })
      } 
      else if(value === 'game') {
        setIsLoad({
          isMovie : false,
          isTV : false,
          isGame : true,
        })
        }       
  }

  const  handleSearch=(e)=>{
    e.preventDefault()
    // console.log(text);
    setToggleNext(true)
    if(text !== undefined && site !== 'anime' && site !=='manga' ) {
        setToggleSearch(true)
        setTitle("Search Results")
        if(site === 'movie' || site === 'tv') setAPI(SEARCH_URL + language + '&query=' + text );
        if(site === 'game') setAPI(API_GAME_SEARCH + text + '&key=de5546150ede4a3a97d865bfda75d85b') 
    if(site === 'movie') {
        setIsLoad({
        isMovie : true,
        isTV : false,
        isGame : false,
        })
        }
    else if(site === 'tv') {
        setIsLoad({
        isMovie : false,
        isTV : true,
        isGame : false,
        })
        }
    else if(site === 'game'){
      setIsLoad({
        isMovie : false,
        isTV : false,
        isGame : true,
        })
    }    
        setPage(1)
    }
    else{
      setDataMovie([])
      setToggleNext(false)
      setToggleSearch(true)
      setDataSearch({
        dataResults : 0,
        dataPage : 0,
      })
    }
    
    
  }


  const handlePrevPage=()=>{
      setPage(page-1)
      if(toggleSearch && site !== 'game') setAPI(SEARCH_URL + language + '&query=' + text + '&page=' + (page-1))
      if(toggleSearch && site === 'game') setAPI(API_GAME_SEARCH + text + '&key=de5546150ede4a3a97d865bfda75d85b&page=' + (page-1))
      else if(site === 'movie') setAPI(BASE_URL + discoverMovie + '&' + API_KEY + language + '&page=' + (page-1))
      else if(site === 'tv') setAPI(BASE_URL + discoverMovie + '?' + API_KEY + language + '&page=' + (page-1))
      else if(site === 'game') setAPI(APIGame + (page-1))
     
  }

  const handleNextPage=()=>{
      setPage(page+1)
      if(toggleSearch && site !== 'game') setAPI(SEARCH_URL + language + '&query=' + text + '&page=' + (page+1))
      if(toggleSearch && site === 'game') setAPI(API_GAME_SEARCH + text + '&key=de5546150ede4a3a97d865bfda75d85b&page=' + (page+1))
      else if(site === 'movie')  setAPI(BASE_URL + discoverMovie + '&' + API_KEY + language + '&page=' + (page+1))
      else if(site === 'tv') setAPI(BASE_URL + discoverMovie + '?' + API_KEY + language + '&page=' + (page+1))
      else if(site === 'game') setAPI(APIGame + (page+1))
      
  }

  const handleMenu=()=>{
        setToggleHidden(!toggleHidden)

  }

  return (
    <div>

          <div className="top-panel">
            <Title/>
            <Menu
            handleDiscover={handleDiscover}
            actionCategory={actionCategory}
            handleTVShow={handleTVShow}
            handleToGame={handleToGame}
            page={page}
            toggleHidden={toggleHidden}
            handleMenu={handleMenu}
            />
            <Profile
            handleLanguage={handleLanguage}
            handleChange={handleChange}
            handleMenu={handleMenu}
            />
          </div>
          {
            (isloadMovie) ? (
                <ProfileMovie
              ToggleMovie={ToggleMovie}
              movieSelected={movieSelected}
              BASE_IMG={BASE_IMG}
              onhandleVideo={onhandleVideo}
              toggleVideo={toggleVideo}
              handleToggleVideo={handleToggleVideo}
              dataVideo={dataVideo}
              site={site}
              actionForum={actionForum}
              />
              ) : (
              <>
              <Search
              background={background}
              actionSearch={actionSearch}
              handleSearch={handleSearch}  
              site={site}   

              />
             <Movie
              BASE_IMG={BASE_IMG}
              dataMovie={dataMovie}
              ToggleMovie={ToggleMovie}
              actionProfileMovie={actionProfileMovie}
              title={title}
              site={site}
              toggleSearch={toggleSearch}
              dataSearch={dataSearch}  
              handleClickSearch={handleClickSearch} 
              isLoad={isLoad} 
              />
                  <Page
                    page={page}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage}
                    togglePrev={togglePrev}
                    toggleNext={toggleNext}             
                  />
            </>
              )

          }
          
          
      </div>
  );
}

export default App;
