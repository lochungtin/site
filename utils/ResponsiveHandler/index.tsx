import getWindowSize from './window';

export default class ResponsiveHandler {
    static layout = {
        FULLSCREEN: "FULLSCREEN",
        HALFSCREEN: "HALFSCREEN",
        MINISCREEN: "MINISCREEN",
        MOBILEVIEW: "MOBILEVIEW"
    }

    static size = {
        FULLSCREEN: 1000,
        HALFSCREEN: 650,
        MINISCREEN: 550 
    }

    static getLayout = () => {
        const width = getWindowSize().width;
        if (width >= ResponsiveHandler.size.FULLSCREEN)
            return ResponsiveHandler.layout.FULLSCREEN;
        
        if (width >= ResponsiveHandler.size.HALFSCREEN)
            return ResponsiveHandler.layout.HALFSCREEN;

        if (width >= ResponsiveHandler.size.MINISCREEN)
            return ResponsiveHandler.layout.MINISCREEN;
        
        return ResponsiveHandler.layout.MOBILEVIEW;
    }

    static getWidth = () => getWindowSize().width;
}