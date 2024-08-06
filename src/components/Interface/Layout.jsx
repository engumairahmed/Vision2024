import React from 'react'
import FooterComp from './FooterComp'
import HeaderComp from './HeaderComp'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <body className="max-w-[1920px] mx-auto" style={{ background: 'black', color: 'white' }}>
                <div className="bg-black text-gray-100 text-[15px]" >

                    <HeaderComp></HeaderComp>

                    <Outlet/>

                    <FooterComp></FooterComp>

                </div>
            </body>
        </>
    )
}

export default Layout
