import arrow1 from '../images/arrow1.png';

export default function Page(props){
    return(
        <div className="page">
            {
                props.togglePrev ? (
                    <div className="page__prev" onClick={props.handlePrevPage}><img src={arrow1} alt="arrow" /><span>Prev</span></div>
                ) : (
                    <div className="page_disable"></div>
                )
            }
            <div className="page__position"><span>{props.page}</span></div>
            {
                props.toggleNext ? (
                    <div className="page__next" onClick={props.handleNextPage}><span>Next</span><img src={arrow1} alt="arrow" /></div>
                ) : (
                    <div className="page_disable"></div>
                )
            }
      </div>
    )
}