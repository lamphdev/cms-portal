import { SearchOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"
import { Button, Input, Select, PaginationProps, Pagination } from "antd"
import { Table, TH } from "../../Components"
import { PaginationCustom } from "../../Components/PaginationCustom"
import { theme } from "../../theme"


const ServiceDiv = styled('div')(() => ({
    background: '#FFFFFF',
    '.form-search': {
        marginTop: 30,
        background: '#F1F4F6',
        borderRadius: 8,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '18px 10px 35px 20px',
        '>div': {
            width: 240,
            '> span': {
                display: 'block',
                paddingBottom: 3,
            },
            '> .ant-select': {
                width: 246.6,
            },
        }
    },
    '.actions': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
        button: {
            backgroundColor: theme.colors.primary,
            ':hover': {
                backgroundColor: theme.colors.primary
            }
        },
    },
    '.ant-pagination': {
        marginTop: 53,
        '.ant-pagination-item-active': {
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.primary,
            a: {
                color: '#FFFFFF',
            }
        }
    }
}))

export const ServiceList = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const onChange: PaginationProps['onChange'] = (pageNumber: number) => {
        console.log('Page: ', pageNumber);
    };
    return (<ServiceDiv>
        <div>
            <span>Danh sách dịch vụ</span>
        </div>
        <div className="searchForm">
            <div className="form-search">
                <div>
                    <span>Loại dịch vụ</span>
                    <Select
                        defaultValue=""
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </div>
                <div>
                    <span>Tên dịch vụ</span>
                    <Input placeholder="Nhập tên dịch vụ" />
                </div>
                <div>
                    <span>Trạng thái</span>
                    <Select
                        defaultValue=""
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </div>
            </div>
            <div className="actions">
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
            </div>
        </div>
        <Table>
            <thead>
                <tr>
                    <TH>STT</TH>
                    <TH sortable="service">Tên dịch vụ</TH>
                    <TH>Loại dịch vụ</TH>
                    <TH>Trạng thái</TH>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ textAlign: 'center' }}>1</td>
                    <td style={{ textAlign: 'center' }}>Dịch vụ A</td>
                    <td>Hóa đơn điện tử</td>
                    <td style={{ color: '#0075FF', textAlign: 'center', cursor: 'pointer' }}>Công khai</td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'center' }}>2</td>
                    <td style={{ textAlign: 'center' }}>Dịch vụ B</td>
                    <td>Hóa đơn điện tử</td>
                    <td style={{ color: '#FF0000', textAlign: 'center', cursor: 'pointer' }}>Đã khóa</td>
                </tr>
            </tbody>
        </Table>
        <PaginationCustom defaultCurrent={2} total={500} onChange={onChange} />
    </ServiceDiv>)
}