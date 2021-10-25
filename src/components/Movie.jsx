import TaskMovie from "./TaskMovie";

export default function Movie(props){


    

    return(
        <main>
          <div className="main">
            {
              !props.toggleSearch ? (
                (props.site ==='anime' || props.site ==='manga') ? (
                  <h3 style={{top:'-0.5%'}}>{props.title}</h3>
                ) : (
                  <h3>{props.title}</h3>
                )
              ) : (
                <ul className="search__title">
                    <h3>{props.title} : <span>{props.dataSearch.dataResults}</span></h3>
                    <li className={props.isLoad.isMovie ? ('active') : ('')} onClick={(value)=>props.handleClickSearch('movie')}>Movies</li>
                    <li className={props.isLoad.isTV ? ('active') : ('')} onClick={(value)=>props.handleClickSearch('tv')}>TV Shows</li>
                    <li className={props.isLoad.isGame ? ('active') : ('')} onClick={(value)=>props.handleClickSearch('game')}>Games</li>
                </ul>
              )
            }
            {
              (props.dataMovie.length !== 0) ? (
                  props.dataMovie.map((task,key) =>
                    <TaskMovie
                      key ={key}
                      task={task}
                      BASE_IMG={props.BASE_IMG}
                      ToggleMovie={props.ToggleMovie}
                      actionProfileMovie={props.actionProfileMovie}
                      actionContent={props.actionContent}
                      actionBgComics={props.actionBgComics}
                      site={props.site}
                    />
                )
              ) : (
                <h3 className='no__result'>There are no movies that matched your query.</h3>
              ) 

            }
          </div>
        </main>
    )
}