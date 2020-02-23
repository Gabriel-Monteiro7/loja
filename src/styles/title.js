import styled from 'styled-components'
import {sm} from './global'

export const Title = styled.h1`
    font-size:65px;
    font-weight:bold;
    color:#151515;
    @media(max-width:${sm}px){
        font-size:40px;
    }
`;