import styled from "@emotion/styled";
import {theme} from '../../theme';

export const Table = styled.table<{ isDraggingOver: boolean }>`
    border: 1px solid rgba(0, 0, 0, 0.5);
    height: auto;
    border-spacing: 0;
    border-radius: 5px;
    overflow: hidden;
    thead{
        background: #EAEDEE;
    }
    tbody{
        ${props => props.isDraggingOver ? `border: 1px solid ${theme.colors.primary};` : ''}
        tr{
            :hover{
                border: 1px solid ${theme.colors.primary}!important;
            }
        }
    }
`;

export const ContainerDiv = styled.div`
    > .header{
        padding: 12px 6px 13px 15px;
        border-color: ${theme.colors.primary};
        color: #fff;
        border-radius: 5px 5px 0px 0px;
        font-weight: 700;
    }
    >.body{
        padding: 15px;
        #service{
            width: 500px;
            height: 28px;
            background: #FFFFFF;
            border: 1px solid #5F6368;
            border-radius: 5px;
            outline: none;
        }
        min-height: 60vh;
        box-sizing: border-box;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    >.footer{
        padding: 15px;
        display: flex;
        justify-content: center;
        gap: 60px;
    }
`;

export const ButtonBack = styled.button`
    box-sizing: border-box;
    width: 141px;
    height: 40px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 5px;
    color: ${theme.colors.primary};
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    outline: none;
`;
export const ButtonSave = styled.button`
    width: 141px;
    height: 40px;
    background: ${theme.colors.primary};
    border-radius: 5px;
    color: #fff;
    border: none;
    background: transparent;
`;

export const Configfilter = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    .left {
        width: 49%;
    }
    .right {
        width: 48%;
        background: #fff;
        padding: 12px 78px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        >div{
            background: rgb(249, 249, 249);
            padding: 28px 30px;
            min-height: 50vh;
            .title{
                text-align: center;
            }
            .searchbar-filter{
                margin-top: 10px;
            }
            .price-filter{
                margin-top: 10px;
                .price{
                    color: #FF0000;
                }
                .ranges{
                    margin-top: 10px;
                }
            }
            .package-filter{
                margin-top: 10px;
                div{
                    display: flex;
                    
                    width: 100%;
                    .col1{
                        width: 50%;
                        flex-wrap: wrap;
                    }
                    .col2{
                        width: 50%;
                        flex-wrap: wrap;
                    }
                }
            }
        }
    }
`;

export const SearchBar = styled.div`
    > div{
        position: relative;
        input{
            padding: 11px 6px 11px 40px;
            width: 90%;
            background-color: #FFFFFF;
            border: 1px solid #E2E2E2;
            border-radius: 8px;
            outline: none;
        }
        img{
            position: absolute;
            top: 8px;
            left: 13px;
            width: 20px;
            height: 24px;
            color: #000;
        }
    }
`;