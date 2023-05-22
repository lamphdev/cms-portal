import styled from '@emotion/styled';
import { Input } from 'antd';
import { ReactElement, JSXElementConstructor } from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps, FieldValues, useForm, UseFormStateReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SearchIcon from './assets/search-icon.svg';
import AddIcon from './assets/add-icon.svg';
import EditIcon from './assets/edit-icon.svg';
import LockIcon from './assets/lock-icon.svg';
import LockOpenIcon from './assets/lock-open-icon.svg';
import { Table, TH } from '../../Components';
const SearchDivStyle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 18px;
    justify-content: flex-end;
    align-items: center;
    label {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.15px;
        color: #2D3236;
    }
    input {
        box-sizing: border-box;
        width: 526px;
        height: 36px;

        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        padding: 8px 16px;
        outline: none;
    }
`;

const ButtonStyle = styled.button`
    width: 121px;
    border-radius: 5px;
    background-color: #EF0032;
    padding: 8px 5px 8px 34px;
    position: relative;
    color: #fff;
    font-size: 14px;
    text-align: center;
    font-weight: 400;
    img {
        position: absolute;
        top: 8px;
        left: 18px;
        bottom: 0;
        width: 20px;
    }
`;

const ActionsDivStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ButtonActionsStyle = styled.button`

`;


export const FilterList = () => {
    const { control, getValues } = useForm();
    const navigate = useNavigate();

    const onCreateNew = () => {
        navigate('/manage/filter-management/new');
    }

    return (
        <div>
            Filter
            <div>
                <SearchDivStyle>
                    <Controller
                        control={control}
                        render={function ({ field, fieldState, formState, }: { field: ControllerRenderProps<FieldValues, string>; fieldState: ControllerFieldState; formState: UseFormStateReturn<FieldValues>; }): ReactElement<any, string | JSXElementConstructor<any>> {
                            return (<>
                                <label htmlFor="serviceName">Tên dịch vụ</label>
                                <input id="serviceName" placeholder='Nhập tên dịch vụ' type="text" />
                            </>)
                        }} name={'serviceName'}
                    />
                    <ButtonStyle>
                        <img src={SearchIcon} />
                        Tìm kiếm
                    </ButtonStyle>
                    <ButtonStyle onClick={onCreateNew}>
                        <img src={AddIcon} />
                        Tạo mới
                    </ButtonStyle>
                </SearchDivStyle>
                <div className='mt-7'>
                    <Table onSort={s => console.log(s)}>
                        <thead>
                            <tr>
                                <TH>STT</TH>
                                <TH sortable='name'>Tên dịch vụ</TH>
                                <TH sortable='taxCode'>Trạng thái</TH>
                                <TH sortable='phone'>Thao tác</TH>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((row) => (
                                <tr key={row}>
                                    <td className='text-center'>{row}</td>
                                    <td className='text-center'>Nguyễn Văn A</td>
                                    <td className='text-center'>87289748234</td>
                                    <td className='text-center'>
                                        <ActionsDivStyle>
                                            <ButtonActionsStyle title='edit'>
                                                <img src={EditIcon} />
                                            </ButtonActionsStyle>
                                            <ButtonActionsStyle title='lock'>
                                                <img src={LockIcon} />
                                            </ButtonActionsStyle>
                                            <ButtonActionsStyle title='open'>
                                                <img src={LockOpenIcon} />
                                            </ButtonActionsStyle>
                                        </ActionsDivStyle>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}