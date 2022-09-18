import React from 'react';
import Header from './Header';
import LeftSidebar from './Leftside';
import RightSidebar from './Rightside';
import {Outlet} from 'react-router-dom';
import Content from './Content';

function AuthLayout({children}:{children: any}) {
    return (
        <>
            <Header />
            <LeftSidebar />
            <RightSidebar />
            <Content>
                {children}
            </Content>
            <Outlet />
        </>
    );
}

export default AuthLayout; 