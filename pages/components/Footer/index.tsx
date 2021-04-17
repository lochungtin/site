import React from 'react';

import ResponsiveHandler from '../../../utils/ResponsiveHandler';

export default function Footer() {
    const layout = ResponsiveHandler.getLayout();
    const mobile = layout === ResponsiveHandler.layout.MOBILEVIEW;

    const flexDirection = mobile ? "column" : "row";
    const minHeight = mobile ? undefined : "20ch";
    const width = ResponsiveHandler.size[layout];

    return (
        <footer>
            <div className="footerContentContainer" style={{ width }}>
                <div className="footerColumns" style={{ flexDirection }}>
                    <div className="footerColumn" style={{ minHeight }}>
                        <p className="footerColumnTitleText">
                            General Resources
                        </p>
                        <a>asdf</a>
                        <a>asdf</a>
                        <a>asdf</a>
                        <a>asdf</a>
                        <a>asdf</a>
                    </div>
                    <div className="footerColumn" style={{ minHeight }}>
                        <p className="footerColumnTitleText">
                            Projects
                        </p>
                        <a>asdf</a>
                        <a>asdf</a>
                        <a>asdf</a>
                    </div>
                    <div className="footerColumn" style={{ minHeight }}>
                        <p className="footerColumnTitleText">
                            Socials
                        </p>
                        <a>asdf</a>
                        <a>asdf</a>
                        <a>asdf</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}