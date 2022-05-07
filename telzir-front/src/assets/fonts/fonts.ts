import { createGlobalStyle } from "styled-components";
import RobotoRegular from "../../assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "../../assets/fonts/Roboto-Bold.ttf";
import RobotoBlack from "../../assets/fonts/Roboto-Black.ttf";
import RobotoMedium from "../../assets/fonts/Roboto-Medium.ttf";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'RobotoRegular';
        src: local('RobotoRegular'),
        url(${RobotoRegular}) format('truetype');
        font-weight: normal;
    }
    @font-face {
        font-family: 'RobotoMedium';
        src: local('RobotoMedium'),
        url(${RobotoMedium}) format('truetype');
        font-weight: 500;
    }
    @font-face {
        font-family: 'RobotoBold';
        src: local('RobotoBold'),
        url(${RobotoBold}) format('truetype');
        font-weight: 700;
    }
    @font-face {
        font-family: 'RobotoBlack';
        src: local('RobotoBlack'),
        url(${RobotoBlack}) format('truetype');
        font-weight: 900;
    }
`;
