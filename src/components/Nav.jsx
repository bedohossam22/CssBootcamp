import image from "../assets/Logo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Nav(){
    return (
        <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={image}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} className="white"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}