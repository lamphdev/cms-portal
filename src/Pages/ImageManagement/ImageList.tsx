import { SearchOutlined, FolderAddFilled, UploadOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"
import { Button, Input, Modal } from "antd"
import moment from "moment"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Table, TH } from "../../Components"
import { TextError } from "../../Components/TextError"
import { theme } from "../../theme"
import { DATE_FORMAT, disabledDateTomorrow, MyDatePicker } from "../../utils/constant"
import { isBefore } from "../../utils/validate"


const ImageListBlock = styled('div')(() => ({
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
            '> .ant-picker': {
                width: 246.6,
            },
        }
    },
    '.actions': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
        gap: 50,
        button: {
            backgroundColor: theme.colors.primary,
            ':hover': {
                backgroundColor: theme.colors.primary
            }
        },
    },
    '.ant-modal-content': {
        'input': {
            borderColor: 'red',
        }
    },
}))

const InputFolderName = styled(Input)(() => ({
    '&.invalid': {
        borderColor: '#ff0000',
    }
}))

const TD_CENTER = styled('td')(() => ({
    textAlign: 'center',
    button: {
        cursor: "pointer",
    }
}))

const ActionButton = styled(Button)((props: any) => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: props.color ? props.color : '#4096ff',
    '&.ant-btn-primary': {
        ':hover': {
            backgroundColor: props.color ? `${props.color}!important` : '#4096ff'
        }
    }
}))

export const ImageList = () => {
    const navigate = useNavigate();
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            fromDate: moment().add(-30, 'days'),
            toDate: moment(),
            text: ""
        },
        mode: 'all',
        reValidateMode: 'onChange',
    });

    const { control: controlFolder, getValues: getValueFolder, formState: folderFormState } = useForm({
        mode: 'all',// validate mode for all
        reValidateMode: 'onChange',// revalidate when onchange
    });
    const [open, setOpen] = useState<boolean>(false);
    return <ImageListBlock>
        <div>
            <span>Ảnh</span>
        </div>
        <div className="searchForm">
            <div className="form-search">
                <Controller control={control} name="fromDate"
                    rules={{
                        validate: isBefore,
                    }}
                    render={({ field, fieldState }) => <div>
                        <span>Ngày cập nhật: Từ ngày</span>
                        <MyDatePicker {...field} allowClear={false} inputReadOnly format={DATE_FORMAT} />
                        {
                            fieldState.error && <TextError>{fieldState.error.message}</TextError>
                        }
                    </div>}
                />
                <Controller control={control} name="toDate"
                    render={({ field }) => <div>
                        <span>Ngày cập nhật: Đến ngày</span>
                        <MyDatePicker {...field} disabledDate={disabledDateTomorrow} allowClear={false} inputReadOnly format={DATE_FORMAT} />
                    </div>}
                />
                <Controller control={control} name="text"
                    render={({ field }) => <div>
                        <span>Tên thư mục/ ảnh</span>
                        <Input {...field} maxLength={5} placeholder={"Nhập tên thư mục/ ảnh"} />
                    </div>}
                />
            </div>
        </div>
        <div className="actions">
            <Button type="primary" onClick={() => console.log(getValues())} icon={<SearchOutlined />}>Tìm kiếm</Button>
            <Button type="primary" onClick={() => setOpen(true)} icon={<FolderAddFilled />}>Tạo thư mục</Button>
            <Button type="primary" icon={<UploadOutlined />}>Tải ảnh</Button>
        </div>
        <Table>
            <thead>
                <tr>
                    <TH>STT</TH>
                    <TH>Tên thư mục/ảnh</TH>
                    <TH>Số lượng ảnh</TH>
                    <TH>View</TH>
                    <TH>Ngày cập nhật</TH>
                    <TH>Thao tác</TH>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <TD_CENTER>1</TD_CENTER>
                    <td>Dịch vụ A</td>
                    <TD_CENTER>4</TD_CENTER>
                    <td>Image view o day</td>
                    <TD_CENTER>20/04/2023 03:02:01</TD_CENTER>
                    <TD_CENTER>
                        <ActionButton type="primary" icon={<EditOutlined />}></ActionButton>
                        <ActionButton color={theme.colors.primary} type="primary" icon={<DeleteOutlined />}></ActionButton>
                    </TD_CENTER>
                </tr>
            </tbody>
        </Table>
        <Modal open={open}
            cancelText={"Hủy"}
            okText="Lưu"
            onCancel={() => setOpen(false)}
            onOk={() => {
                navigate('/manage/image-management/new')
            }}>
            <div>
                <h4>Thư mục mới*</h4>
                <Controller
                    control={controlFolder}
                    name={"folderName"}
                    rules={{ required: { value: true, message: 'Bắt buộc nhập tên thư mục' }, maxLength: { value: 100, message: 'max length 100 ky tu' }, min: 1 }}
                    render={({ field, fieldState }) => <>
                        <InputFolderName {...field}
                            className={fieldState.invalid ? 'invalid' : ''}
                            placeholder="Nhập tên thư mục" />
                        {fieldState.error?.message && <TextError>{fieldState.error?.message}</TextError>}
                    </>}
                />
            </div>
        </Modal>
    </ImageListBlock>
}

