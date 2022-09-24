import {Outlet} from 'react-router-dom';
import '../assets/sass/noauth.css';

function NoAuthLayout({children}:{children: any}) {
    return (
        <div id="noAuth_layout">
            {children}
            <Outlet />
        </div>
    );
}

export default NoAuthLayout;