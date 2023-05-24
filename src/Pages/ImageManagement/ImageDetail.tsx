import { CopyOutlined, DeleteOutlined, EditOutlined, UploadOutlined } from "@ant-design/icons"
import { Input, Select, Upload } from "antd"
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ImageCrop } from "../../Components/ImageCrop/ImageCrop";
import { ButtonActionImage, ButtonEdit, ButtonUpload, ImageDetailBlock, ModalEditImage } from "./styled"

export const ImageDetail = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { control , watch, getValues} = useForm();
    const [currentAspect, setCurrentAspect] = useState([1, 1]);
    const watchAspect = watch("aspect");
    useEffect(() => {
        const [width, height] = (watchAspect + "").split(":")
        setCurrentAspect([+width, +height]);
    }, [watchAspect])

    return <ImageDetailBlock>
        <div>
            <span>Ảnh {'>'} Chi tiết thư mục</span>
        </div>
        <div className="header">
            <span>CHI TIẾT THƯ MỤC</span>
            <ButtonEdit type="primary" icon={<EditOutlined />}></ButtonEdit>
        </div>
        <div className="content">
            <div>
                <span><strong>Thư mục: </strong>Dịch vụ ABC</span>
            </div>
            <div className="content-primary">
                <span>Hình ảnh</span>
                <div className="cards">
                    <div className="actions">
                        <span>Kéo thả để tải ảnh</span>
                        <span>Hoặc</span>
                        <Upload>
                            <ButtonUpload icon={<UploadOutlined />}>Tải ảnh</ButtonUpload>
                        </Upload>
                    </div>
                    {
                        [1, 2, 3, 4, 5].map((item: any, index: number) => <div className="card" key={index}>
                            <div className="action">
                                <ButtonActionImage onClick={() => setOpen(true)} color={'blue'} icon={<EditOutlined />} title={"edit"}></ButtonActionImage>
                                <ButtonActionImage color={'orange'} icon={<CopyOutlined />} title={"copy"}></ButtonActionImage>
                                <ButtonActionImage icon={<DeleteOutlined />} title={"delete"}></ButtonActionImage>
                            </div>
                            <div className='imagepreview'>
                                <img src={'/images/image-preview.svg'} alt="/images/image-preview.svg" />
                            </div>
                            <div className="title">
                                Ảnh dịch vụ ABCXYZ
                            </div>
                            <div className="createDate">05/04/2023 2:06:00</div>
                        </div>)
                    }
                </div>
            </div>
        </div>
        <ModalEditImage
            open={open}
            onCancel={() => setOpen(false)}
            cancelText={"Hủy"}
            okText={"Xác nhận"}
            title={"CHỈNH SỬA ẢNH TẢI LÊN"}
        >
            <div className="info-edit">
                <Controller
                    control={control}
                    name="folder"
                    render={({ field }) => <div>
                        <label htmlFor="">Thư mục</label>
                        <Select
                            {...field}
                            allowClear={false}
                            options={[
                                { value: 'Dịch vụ A', label: 'Dịch vụ A' }
                            ]}
                        />
                    </div>}
                />
                <Controller
                    control={control}
                    name="aspect"
                    render={({ field }) => <div>
                        <label htmlFor="">Kích thước <span className="danger">*</span></label>
                        <Select
                            {...field}
                            allowClear={false}
                            options={[
                                { value: '1:1', label: '1:1' },
                                { value: '4:3', label: '4:3' },
                                { value: '3:2', label: '3:2' },
                                { value: '16:9', label: '16:9' },
                            ]}
                        />
                    </div>}
                />
                <Controller
                    control={control}
                    name="filename"
                    render={({ field }) => <div>
                        <label htmlFor="">Tên ảnh <span className="danger">*</span></label>
                        <Input {...field} placeholder="Nhập tên ảnh" />
                    </div>}
                />
            </div>
            <div className="image-preview">
                <ImageCrop aspect={currentAspect[0]/currentAspect[1]} />
            </div>
        </ModalEditImage>
    </ImageDetailBlock>
}