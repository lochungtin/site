import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ResponsiveHandler from '../../../utils/ResponsiveHandler';

type BtnProps = {
    path: string;
};

export default function Btn({ path }: BtnProps) {
    const router = useRouter();
    const margin = ResponsiveHandler.getLayout() === ResponsiveHandler.layout.MOBILEVIEW;

    const style = {
        color: router.asPath === path ? "#6675c7" : undefined,
        marginLeft: margin ? "1vw" : "0",
        marginRight: margin ? "1vw" : "0",  
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(path);
      }

    return (
        <Link href={path}>
            <a
                className="headerNavBtnText"
                onClick={handleClick}
                style={style}
            >
                {path === "/" ? "Home" : path[0].toUpperCase() + path.substring(1)}
            </a>
        </Link>
    );
}