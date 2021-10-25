import user from "../images/user/user.png"
import edit from "../images/user/edit profile.png"
import bars from '../images/bars.png'

export default function Profile(props){
    

    return(
        <div className="top-panel__user">
             {
                <form className="form-language" onSubmit={props.handleChange}>
                <select className="form-control language" onChange={props.handleLanguage} >
                <option className="d-none">Language</option>
                <option value="en">English</option>
                <option value="vi">Vietnamese</option>
                </select>
                <input type="submit" value="Change" className="btn input-language btn-light" />
                </form>

             }
              <div className="top-panel__user--img"><img src={user} alt="user" /></div>
              <div className="top-panel__user--text">Carol Danvers</div>
              <div className="top-panel__user--edit"><img src={edit} alt="edit" /></div>
              <div className="top-panel__user--menu" onClick={props.handleMenu}><img src={bars} alt="bars" /></div>
        </div>
    )
}