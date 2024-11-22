import Link from 'next/link';
import React from "react";
import {Checkbox} from "@nextui-org/checkbox";
import styles from '../styles/Navbar.module.css';

export default function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems = [
        {label: 'Traffic Stops', href: 'traffic-stops'},
        {label: 'Pokemon Directory', href:'pokemon-directory'},
        {label: 'About Us', href: 'about-us'},
    ]

    return (
        <div className={styles.collapsible_menu}>
            <Checkbox
                className={styles.menu_checkbox}
                isSelected={isMenuOpen}
                onValueChange={setIsMenuOpen}>Menu</Checkbox>
            {isMenuOpen && 
                <div className={styles.menu_content}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/traffic-stops">Traffic Stops</Link></li>
                        <li><Link href="/pokemon-directory">Pokemon Directory</Link></li>
                    </ul>
                </div>
            }
        </div>
    );
}