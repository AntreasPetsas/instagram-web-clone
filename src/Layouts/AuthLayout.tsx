import React from 'react';
import Header from './Header';
import LeftSidebar from './Leftside';
import RightSidebar from './Rightside';

function AuthLayout(children: any) {
    return (
        <>
            <Header />
            <LeftSidebar />
            <RightSidebar />
            {children}
        </>
    );
}

export default AuthLayout; 