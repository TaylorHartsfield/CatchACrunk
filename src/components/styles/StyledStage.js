import styled from "styled-components";

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(20vw / ${props => props.width})
    );
    grid-template-columns: reapeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid purple;
    width: 100%;
    max-width: 25vw;
    background: #a61caf;
`