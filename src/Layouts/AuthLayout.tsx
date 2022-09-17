import React from 'react';
import Header from './Header';
import LeftSidebar from './Leftside';
import RightSidebar from './Rightside';
import {Outlet} from 'react-router-dom';

function AuthLayout() {
    return (
        <>
            <Header />
            <LeftSidebar />
            <RightSidebar />
            <Outlet />
        </>
    );
}

export default AuthLayout; 