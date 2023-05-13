import {NavLink, useNavigate} from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
    const navigate = useNavigate();

    const navigateHandler = (e) => {
        navigate('/products');
    }

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) => isActive ? classes.active : ''}
                            end
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/products"
                            className={({isActive}) => isActive ? classes.active : ''}
                        >
                            Products
                        </NavLink>
                    </li>

                    <li>
                        <button onClick={navigateHandler}>Navigate</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
