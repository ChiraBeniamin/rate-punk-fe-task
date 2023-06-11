import "@/styles/globals.scss";

import type {AppProps} from "next/app";
import Header from "@/common/components/Header";
import {useRouter} from "next/router";
import {USER} from "@/common/constants/common";
import logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import React from "react";
import Footer from "@/common/components/footer";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();

    const showHeader = router.pathname !== '/login' && router.pathname !== '/sign-up';
    if (typeof window !== 'undefined' && !localStorage.getItem(USER.ID)) {
        router.push('/sign-up')
    }
    return (
        <div className={`background ${showHeader ? 'background-image' : 'background-gradient'}`}>
            {!showHeader &&
                <div style={{width: "100%", display: 'flex', justifyContent: 'center', marginTop: 25}}><Image
                    height={60}
                    src={logo}/>
                </div>}
            {showHeader && <Header></Header>}
            <Component {...pageProps} />
            {showHeader && <Footer></Footer>}
        </div>
    )
}
