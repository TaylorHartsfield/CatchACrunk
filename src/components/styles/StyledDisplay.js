import styled from "styled-components";

export const StyledDisplay =styled.div`
    box-sizing:border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px;
    padding: 20px;
    border: 4px solid purple;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'purple' : 'green')};
    backrgound: #a61caf;
    font-size: 2em;
`