import styled from '@emotion/styled';

export const List = styled.ul`
    display: block;
    margin: auto;
    width: fit-content;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 20px 40px 20px 10px;
    width: 250px;
    background-color: #fff;
    border: 1px solid #f3f6f9;
    border-radius: 10px;
    :not(:last-child) {
    margin-bottom: 10px;
    }
    cursor: pointer;
    transform: scale(1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        transform: scale(1.1);
        background-color: #f3f6f9;
    }
`;

export const AvatarImg = styled.img`
    margin-right: 20px;
`;

export const Status = styled.span`
    margin-right: 25px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
    color: #343538;
    font-size: 20px;
    font-weight: 700;
`;