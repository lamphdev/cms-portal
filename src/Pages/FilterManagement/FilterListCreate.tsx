import styled from "@emotion/styled"
import { Checkbox, Modal } from "antd";
import { useState } from "react";
import { DragDropContext, Draggable, DraggableProvided, DraggableStateSnapshot, Droppable, DroppableProvided, DroppableStateSnapshot, DropResult } from "react-beautiful-dnd";
import { theme } from '../../theme';
import EditIcon from './assets/edit-icon.svg';
import SearchIcon from './assets/search-black-icon.svg';
import { PriceForm } from "./model/PriceForm";
import { Button, ButtonBack, ButtonSave, Configfilter, ContainerDiv, SearchBar, Table } from "./styled";

const ModalFilter = styled(Modal)`
    &.ant-modal{
        width: 740px!important;
    }
`;

const FilterTypeEnum = {
    SEARCH: "SEARCH",
    PRICE: "PRICE",
    PACKAGE: "PACKAGE",
}

const getArray = () => {
    return [
        { id: 1, name: 'Thanh tìm kiếm', type: FilterTypeEnum.SEARCH, checked: true },
        { id: 2, name: 'Lọc theo giá', type: FilterTypeEnum.PRICE, canEdit: true, checked: true },
        { id: 3, name: 'Lọc theo gói', type: FilterTypeEnum.PACKAGE, canEdit: true, checked: true },
    ];
}

const getTrStyle = (isDragging: boolean, draggableStyle: any) => {
    return {
        userSelect: "none",
        border: isDragging ? `1px solid ${theme.colors.primary}` : "none",
        ...draggableStyle
    }
}

export const FilterListCreate = () => {
    const [items, setItems] = useState<any>(getArray());
    const [currentItem, setCurrentItem] = useState(false);

    const handleOk = () => {
        setCurrentItem(false);
    }

    const handleCancel = () => {
        setCurrentItem(false);
    }

    const reorder = (items: any[], source: { droppableId: string, index: number }, destination: { droppableId: string, index: number }) => {
        const newArrays = Array.from(items);
        const [moved] = newArrays.splice(source.index, 1);
        newArrays.splice(destination.index, 0, moved);
        return newArrays;
    }

    const onDragEnd = (result: any) => {
        const { source, destination } = result;
        if (!destination) {
            return;
        }
        setItems(reorder(items, source, destination));
    }

    const onClickActionEdit = (item: any, index: number) => {
        setCurrentItem(true)
    }

    return (<ContainerDiv>
        <div className="header">
            TẠO MỚI FILTER
        </div>
        <div className="body">
            <div className="flex flex-row gap-11">
                <label htmlFor="service">Dịch vụ <strong>*</strong></label>
                <select name="service" id="service">
                    <option></option>
                </select>
            </div>
            <div className="mt-5">
                Cấu hình filter
                <Configfilter>
                    <div className="left">
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="table-filter" key="table-filter">
                                {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                                    <Table className="table" isDraggingOver={snapshot.isDraggingOver}>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tiêu chí</th>
                                                <th>Thao tác</th>
                                                <th>Hiển thị</th>
                                            </tr>
                                        </thead>
                                        <tbody ref={provided.innerRef}>
                                            {
                                                items && items.map((item: any, index: number) => (
                                                    <Draggable draggableId={item.id + ''} key={item.id + ''} index={index}>
                                                        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (<tr
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getTrStyle(snapshot.isDragging, provided.draggableProps.style)}
                                                        >
                                                            <td style={{ width: "120px", textAlign: "center" }}>{index + 1}</td>
                                                            <td style={{ width: "120px" }}>{item.name}</td>
                                                            <td style={{ width: "120px", textAlign: "center" }}>
                                                                {
                                                                    item?.canEdit && (<Button onClick={() => onClickActionEdit(item, index)}>
                                                                        <img width={24} height={24} src={EditIcon} title={"edit"} />
                                                                    </Button>)
                                                                }
                                                            </td>
                                                            <td style={{ width: "120px", textAlign: "center" }}><Checkbox checked={item.checked} onClick={(event: any) => {
                                                                const newItems = Array.from(items);
                                                                const finder: any = newItems.find((_: any, idx: number) => idx === index);
                                                                finder.checked = event.target.checked;
                                                                setItems(newItems);
                                                            }} /></td>
                                                        </tr>)}
                                                    </Draggable>
                                                ))
                                            }
                                            {provided.placeholder}
                                        </tbody>
                                    </Table>
                                )}
                            </Droppable>
                        </DragDropContext>

                    </div>
                    <div className="right">
                        <div>
                            <p className="title">Xem trước</p>
                            {
                                items && items.map((item: any, index: number) => {
                                    if (item.checked) {
                                        switch (item.type) {
                                            case FilterTypeEnum.SEARCH: {
                                                return (<div className="searchbar-filter" key={index}>
                                                    <p className="font-bold">Thanh tìm kiếm</p>
                                                    <SearchBar>
                                                        <div className="group">
                                                            <input type="text" placeholder="Nhập từ khóa để tìm kiếm" />
                                                            <img src={SearchIcon} alt="search icon" />
                                                        </div>
                                                    </SearchBar>
                                                </div>)
                                                break;
                                            }
                                            case FilterTypeEnum.PRICE: {
                                                return (<div className="price-filter" key={index}>
                                                    <p className="font-bold">Lọc theo giá</p>
                                                    <div>
                                                        <p className="">Giá Min: <span className="text-red-600">X</span> VND</p>
                                                        <p className="">Giá Max: <span className="text-red-600">Y</span> VND</p>
                                                    </div>
                                                    <div className="ranges">
                                                        <p>Từ <span className="text-red-600">0</span> VND - Đến <span className="text-red-600">A</span> VND</p>
                                                        <p>Từ <span className="text-red-600">A</span> VND - Đến <span className="text-red-600">B</span> VND</p>
                                                        <p>Từ <span className="text-red-600">B</span> VND trở lên</p>
                                                    </div>
                                                </div>)
                                                break;
                                            }
                                            case FilterTypeEnum.PACKAGE: {
                                                return (<div className="package-filter" key={index}>
                                                    <div>
                                                        <p className="font-bold">Lọc theo gói</p>
                                                    </div>
                                                    <div>
                                                        <div className="col1">
                                                            <p>Gói <span className="text-red-600">X</span> tháng</p>
                                                        </div>
                                                        <div className="col2">
                                                            <p>Gói <span className="text-red-600">Y</span> tháng</p>
                                                            <p>Gói <span className="text-red-600">Y</span> tháng</p>
                                                            <p>Gói <span className="text-red-600">Y</span> tháng</p>
                                                        </div>
                                                    </div>
                                                </div>)
                                                break;
                                            }
                                        }
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </div>
                    </div>
                </Configfilter>
            </div>
        </div>
        <div className="footer">
            <ButtonBack>Quay lại</ButtonBack>
            <ButtonSave>Lưu</ButtonSave>
        </div>
        <ModalFilter open={currentItem} title={"TIÊU CHÍ LỌC THEO GIÁ"}
            onOk={handleOk} onCancel={handleCancel}
        >
            <PriceForm item={currentItem}></PriceForm>
        </ModalFilter>
    </ContainerDiv>)
}