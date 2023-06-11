import React, {useEffect, useState} from 'react';
import styles from '../../styles/header.module.scss'
import logo from '../../../assets/icons/logo.svg'
import Image from "next/image";
import NavigationItemInterface from "@/common/interfaces/navigationItemsInterface";
import navigationItems from "@/common/constants/navigationItems";
import Link from "next/link";
import {LOGGED} from "@/common/constants/common";
import {useRouter} from "next/navigation";
import SidePanel from "@/common/components/side-panel";

const Index = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [showBurgerButton, setShowBurgerButton] = useState(false);

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    const router = useRouter()
    const logOut = () => {
        localStorage.setItem(LOGGED.IN, 'false')
        router.push('login')
    }
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const desiredWidth = 768; // Change this to your desired pixel value

            setShowBurgerButton(screenWidth <= desiredWidth);
        };

        // Initial check on component mount
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${styles.headerContainer}`}>
            <div><Image height={50} src={logo}/></div>
            <div className={styles.navigationContainer}>
                <ul>{navigationItems.map((item: NavigationItemInterface, index: number) => (
                    <Link key={`${index}&${item.name}`} className={'link'} href={item.route}>
                        <li>{item.name}</li>
                    </Link>
                ))}
                </ul>
            </div>
            <button onClick={logOut} className={'btn-secondary'}>
                Log out
            </button>
            {showBurgerButton && (
                <button onClick={togglePanel}>Burger Button</button>
            )}
            <SidePanel isOpen={isPanelOpen} togglePanel={togglePanel}/>
        </div>
    );
};

export default Index;
