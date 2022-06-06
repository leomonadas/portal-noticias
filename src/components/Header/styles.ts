import styled from "styled-components";

export const Container = styled.header`
    background-color: #363062;
    max-height: 24vh;
    padding-bottom: 16px;
`;      

export const Wrapper = styled.div`
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
`;

export const Logo = styled.h1`
    margin-top: 20px;
    color: white;
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    a{
        background-color: #7C3E66;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        text-decoration: none; 
    }
`;

// export const NavItem = styled.a`
//     color: white;
//     text-decoration: none;
//     margin-left: 16px;
// `;

