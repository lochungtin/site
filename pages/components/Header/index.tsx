import React from 'react';

import ResponsiveHandler from '../../../utils/ResponsiveHandler';
import Btn from './Btn';

export default function Header() {
    const layout = ResponsiveHandler.getLayout();

    const width = ResponsiveHandler.size[layout];

    return (
        <div className="headerContainer">
            <div className="headerTopBarBG">
                <div className="headerTopBar" style={{ width }}>
                    <p className="headerTopBarText">
                        Some Text
                    </p>
                    {layout !== ResponsiveHandler.layout.MOBILEVIEW &&
                        <p className="headerTopBarText">
                            Some more text on the right
                        </p>
                    }
                </div>
            </div>
            <nav style={{ width }}>
                {layout !== ResponsiveHandler.layout.MOBILEVIEW && <Btn path="/" />}
                <Btn path="showcase" />
                <Btn path="projects" />
                <Btn path="achievements" />
                <Btn path="education" />
                <Btn path="about" />
                {/*<Btn path="experience" />*/}
            </nav>
        </div>
    );
}