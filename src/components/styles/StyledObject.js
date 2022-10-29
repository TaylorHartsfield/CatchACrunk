import styled from 'styled-components';


export const StyledObject = styled.div`
    width: auto;
    background: rgba(${props =>props.color}, 0.8);
    border: ${props =>(props.type === 0 ? '0px solid' : '1px solid')};
    border-bottom-color: ${props => props.color}, 0.8);
    border-right-color: ${props => props.color}, 0.8);
    border-top-color: ${props => props.color}, 0.8);
    border-left-color: ${props => props.color}, 0.8);
    `