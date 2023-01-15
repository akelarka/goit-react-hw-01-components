import styled from '@emotion/styled';

export const TableContainer = styled.table`
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 20px;
    border: 1px solid #f3f6f9;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    & thead {
        background-color: #f3f6f9;
        color: #343538;
    }
    & th {
        padding: 10px 20px;
        width: 170px;
        font-size: 18px;
    }
`;

export const TableTitle = styled.thead`
    padding: 10px 20px;
    width: 170px;
    font-size: 18px;
`;

export const TableLine = styled.tr`
    font-size: 16px;
    color: #343538;
    & td {
        padding: 5px 10px;
        text-align: center;
    }
    &:nth-of-type(even) {
        background-color: #f3f6f9;
    }
`;