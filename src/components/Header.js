import {Link, useLocation} from "react-router-dom";
import {useAppContext} from "../contexts/appContext";
import {useEffect, useState} from "react";
import {adminMenu, userMenu} from "../constants/headerMenu";

const Header = () => {
    const {isAdmin, setIsAdmin} = useAppContext()
    const [menu, setMenu] = useState({})
    const location = useLocation()
    const handleLogout = () => {
        setIsAdmin(false)
    }

    useEffect(() => {
        setMenu(isAdmin ? adminMenu : userMenu)
    }, [isAdmin])

    return (
        <div>
            <div className="header">
                {Object.keys(menu).map((page, index) => {
                        return (<Link to={menu[page].path} key={index}
                                      className={location.pathname === menu[page].path ? 'menu active' : 'menu'}
                        >
                            {menu[page].title}
                        </Link>)
                    }
                )}
                {isAdmin &&
                    <Link to='' onClick={handleLogout} className='menu'>
                        Logout
                    </Link>
                }
            </div>
        </div>
    )
}
export default Header