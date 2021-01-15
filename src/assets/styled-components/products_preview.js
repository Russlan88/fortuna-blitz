import styled from 'styled-components';

export const ListPreviewStyle = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
    grid-gap: 25px;
    align-items: flex-end;
    padding-left: 0;
    margin-bottom: 70px;
`
export const ItemPreviewStyle = styled.li`
    list-style: none;
`