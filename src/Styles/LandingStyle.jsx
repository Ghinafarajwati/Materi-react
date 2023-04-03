import styled from "styled-components";

export const Header = styled.header`
    h2 {
        text-align: center;
        margin-top: 70px;
        font-weight: bold;
        margin-bottom: 50px;
    }
`

export const Body = styled.body`
    margin: 0px 0px 100px 30px;

    p {
        font-size: 17px;
    }
    p span {
        font-size: 22px;
        font-weight: bold;
        line-height: 50px;
    }
    p #color{
        color: red;
    }
    #ImageStyle {
        object-fit: cover;
        width: 220px;
        margin: 10px 0px 15px 0px;
    }
    #ImageStyle2 {
        object-fit: cover;
        width: 320px;
        margin: 10px 0px 15px 0px;
    }
    #ImageRouter {
        object-fit: cover;
        width: 390px;
        margin: 0px 0px 20px 0px;
    }
    #ImageConditional {
        object-fit: cover;
        width: 250px;
        margin: 0px 0px 20px 0px;
    }
    #ImgNested {
        object-fit: cover;
        width: 230px;
        margin: 0px 0px 20px 0px;
    }
    #ImgArrayofObject {
        object-fit: cover;
        width: 230px;
        margin: 0px 0px 20px 0px;
    }
    #ImgProps2 {
        object-fit: cover;
        width: 300px;
        margin: -10px 0px 10px 0px;
    }
    #ImgProps1 {
        object-fit: cover;
        width: 300px;
        margin: -10px 0px 20px 0px;
    }
    #ImgUseState {
        object-fit: cover;
        width: 340px;
        margin: -10px 10px 15px 0px;
    }
    #ImgUseEffect {
        object-fit: cover;
        width: 340px;
        margin: -10px 10px 10px 0px;
    }
    #ImgOnChange {
        object-fit: cover;
        width: 410px;
        margin: -10px 0px 20px 0px;
    }
    a {
        text-decoration: none;
    }

`