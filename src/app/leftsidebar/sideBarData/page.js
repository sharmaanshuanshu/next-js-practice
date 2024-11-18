import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo, faContactBook, faContactCard, faGears, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const sideBarData = [
    {
        title: 'Home',
        icon: <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>,
        path: '#home'
    },
    {
        title: 'Services',
        icon: <FontAwesomeIcon icon={faGears}></FontAwesomeIcon>,
        path: '#services'
    },
    {
        title: 'About',
        icon: <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>,
        path: '#about'
    },
    {
        title: 'Contact',
        icon: <FontAwesomeIcon icon={faContactCard}></FontAwesomeIcon>,
        path: '#contact'
    }
    
]