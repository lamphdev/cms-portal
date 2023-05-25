import { CopyOutlined, DeleteOutlined, EditOutlined, UploadOutlined } from "@ant-design/icons"
import { Input, Select, Upload } from "antd"
import { RcFile } from "antd/es/upload/interface";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InView, useInView } from "react-intersection-observer";
import { ImageCrop } from "../../Components/ImageCrop/ImageCrop";
import { ButtonActionImage, ButtonEdit, ButtonUpload, ImageDetailBlock, ModalEditImage } from "./styled"

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export const ImageDetail = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { control, watch, getValues } = useForm();
    // data example intersection obsever
    const [items, setItems] = useState<any>([
        { base64: 'https://s.pinimg.com/webapp/center-77497603.png' },
        { base64: 'https://s.pinimg.com/webapp/topRight-d0230035.png' },
        { base64: 'https://s.pinimg.com/webapp/left-511a9304.png' },
        { base64: 'https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg' },
        { base64: 'https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg' },
        { base64: 'https://i.pinimg.com/236x/f4/dc/58/f4dc58f3bddf1c5b5249511820246df8.jpg' },
        { base64: 'https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg' },
        { base64: 'https://s.pinimg.com/webapp/serve-my-drinks-263547ea.png' },
        { base64: 'https://s.pinimg.com/webapp/shop-bd0c8a04.png' },
        { base64: 'https://s.pinimg.com/webapp/deck-of-dreams-fb527bf1.png' },
    ]);

    const { ref: intersectionObserverRef, inView, entry } = useInView({
        threshold: 1
    });

    const [currentAspect, setCurrentAspect] = useState([1, 1]);
    const watchAspect = watch("aspect");

    useEffect(() => {
        const [width, height] = (watchAspect + "").split(":")
        setCurrentAspect([+width, +height]);
    }, [watchAspect])

    const coppyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    }

    const removeItem = (item: any, index: number) => {

    }

    const beforeUpload = async (file: any, FileList: RcFile[]) => {
        const base64 = await getBase64(file);
        setItems([...items, { base64 }]);
    }

    return <ImageDetailBlock ref={intersectionObserverRef}>
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
                        <Upload
                            fileList={[]}
                            beforeUpload={beforeUpload}
                        >
                            <ButtonUpload icon={<UploadOutlined />}>Tải ảnh</ButtonUpload>
                        </Upload>
                    </div>
                    {
                        items.map((item: any, index: number) =>
                        (<InView>
                            {({ ref, inView }) => (<div className="card" key={index} ref={ref}>
                                <div className="action">
                                    <ButtonActionImage onClick={() => setOpen(true)} color={'blue'} icon={<EditOutlined />} title={"edit"}></ButtonActionImage>
                                    <ButtonActionImage onClick={() => coppyToClipboard('hello word')} color={'orange'} icon={<CopyOutlined />} title={"copy"}></ButtonActionImage>
                                    <ButtonActionImage onClick={() => removeItem(item, index)} icon={<DeleteOutlined />} title={"delete"}></ButtonActionImage>
                                </div>
                                <div className='imagepreview'>
                                    <img src={item.base64 && inView ? item.base64 : '/images/image-preview.svg'}
                                        alt="/images/image-preview.svg"
                                        width={75} height={75}
                                    />
                                </div>
                                <div className="title">
                                    Ảnh dịch vụ ABCXYZ
                                </div>
                                <div className="createDate">05/04/2023 2:06:00</div>
                            </div>)}
                        </InView>))
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
                <ImageCrop aspect={currentAspect[0] / currentAspect[1]} />
            </div>
        </ModalEditImage>
    </ImageDetailBlock>
}