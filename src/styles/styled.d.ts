import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    /* 배경 색상 */
    mainColor: string;
    mainColorLight: string;
    backgroundColor: string;
    darkGray: string;
    lightGray: string;
    superLightGray: string;
  }
}
