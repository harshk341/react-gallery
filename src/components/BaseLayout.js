import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '.';

const BaseLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
 
export default BaseLayout;