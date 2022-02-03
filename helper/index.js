import { Dimensions } from "react-native";
/**
 * * 디바이스 마다 다른 WIDTH/HEIGHT 값을 맞춰줍니다
 * !
 */
const windowDimensions = Dimensions.get("window");

const deviceWidth = windowDimensions.width;
const deviceHeight = windowDimensions.height;

export { deviceWidth, deviceHeight };
