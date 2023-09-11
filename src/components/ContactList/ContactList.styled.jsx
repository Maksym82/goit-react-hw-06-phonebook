import styled from '@emotion/styled';

export const ContactListStyled = styled.ul`
    padding-left: 0;
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    border-radius: 5px;
    background: #74a4c2;
    box-shadow: 1px 1px 5px gray;
    padding: 10px 20px;
    margin-bottom: 15px;
    border: 1px solid gray;
`;

export const ContactData = styled.p`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
`;

export const ButtonDelete = styled.button`
    border-radius: 4px;
    height: 35px;
    padding: 0 5px;
    background: #62869d;
    color: white;
    font-size: 18px;
`;
