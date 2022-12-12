import styled from "styled-components"

export const Container = styled.main`
width: 100%;
max-width: 80%;
margin: 0 auto;
margin-top: 120px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const Text = styled.div`
    width: 50%;

    p{
    font-size: 32px;
    color: #FFFF;
    }

`

export const Form = styled.div`
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 374px;
    h1{
        font-size: 32px;
    }
    h3{
        font-weight: 100;
        font-size: 16px;
    };

    p{
        font-size: 14px;
    };
    
    span{
        font-weight: bold;
        font-size: 12px;
    };
    a{
        color: #23DD7A;
        text-decoration: none;
    }

`