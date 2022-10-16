import {Outlet} from 'react-router-dom';
import '../assets/styles/noauth.scss';

function NoAuthLayout({children}:{children: any}) {

    const root = document.getElementById('root')?.classList.add('noAuth')

    return (
        <div id="noAuth_layout">
            {children}
            <Outlet />
        </div>
    );
}

export default NoAuthLayout;