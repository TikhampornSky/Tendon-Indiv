import React from "react";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";
import BreadCrumbNav from "./BreadCrumbNav";

const Header = () => {
    const router = useRouter();
    const noNavPath = ['/', '/login', '/signup']
    return (
        <>
            {!noNavPath.includes(router.pathname) &&
                <BreadCrumbNav />
            }
            <ThemeToggle />
        </>
    )
}

export default Header