import styled from '@emotion/styled';

import randomColors from '../../utils/randomColors';

export const StatisticsBox = styled.section`
    width: fit-content;
    text-align: center;
    margin-bottom: 50px;
    background-color: #fff;
    border: 1px solid #f3f6f9;
    margin: auto;
    margin-bottom: 60px;
    padding: 0;
`;

export const Title = styled.h2`
    font-weight: 700;
    background-color: white;
    text-align: center;
    text-transform: uppercase;
    color: #343538;
    padding: 30px;
    font-size: 20px;
    margin: 0;
`;

export const StatList = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: ${randomColors};
    color: #fff;
`;

export const Label = styled.span`
    margin-bottom: 10px;
    font-size: 18px;
`;

export const Percentage = styled.span`
    font-size: 20px;
`;