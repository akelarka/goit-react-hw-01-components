import styled from '@emotion/styled';

export const Profiles = styled.div`
    padding: 60px;
    margin: auto;
    width: 300px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
    background-color: #fff;
    border: 1px solid #cad5e3;
    border-bottom: none;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    margin: auto;
    margin-bottom: 20px;
    transform: scale(1);
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        transform: scale(1.1);
        background-color: #f3f6f9;
        
    }
`;

export const Name = styled.p`
    color: #343538;
    margin: 0 0 10px;
    font-size: 20px;
    font-weight: 700;
`;

export const Tag = styled.p`
    margin: 0 0 10px;
    font-size: 18px;
    color: #82909e;
`;

export const Location = styled.p`
    margin: 0 0 10px;
    font-size: 18px;
    color: #82909e;
`;

export const Stats = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
`;

export const StatsList = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid #cad5e3;
    width: 100%;
    background-color: #f3f6f9;
    padding: 10px 10px;
`;

export const Label = styled.span`
    text-align: center;
    font-size: 18px;
    color: #82909e;
    margin-bottom: 10px;
`;

export const Quantity = styled.span`
    color: #343538;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
`;