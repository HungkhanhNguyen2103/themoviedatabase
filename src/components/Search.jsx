export default function Search(props){

    return(
        <div className="header" style={{backgroundImage: 'url('+ props.background +')'}}>
            <div className="header__background" />
            <div className="header__text">
              <h1>welcome.</h1>
              <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <form onSubmit={props.handleSearch}>   
              <input type="text" className="form-control" id='input-search' aria-label="Default" aria-describedby="inputGroup-sizing-default" disabled={(props.site === 'anime' || props.site === 'manga') ? ("disabled") : ("")} placeholder="Search for a movie, tv show, person......" onChange={props.actionSearch}/>
              <input type="submit"  className="btn search" value="Search"/>
            </form>
        </div>
    )
}