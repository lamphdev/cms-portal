
import { MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Input } from "antd";
import React from "react";
import { Controller, useFieldArray } from "react-hook-form";
import { theme } from "../../../theme";

const DivFlex = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
}))

const DivFlexItem = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
}))

const DivFlexWrap = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    paddingRight: 39,
    paddingLeft: 25,
    '>div': {
        input: {
            width: 150,
        },
        gap: 25,
        marginTop: 20,
        position: 'relative',
        button: {
            position: 'absolute',
            top: 3,
            right: -45,
        }
    }
}))

const ButtonAddRangePrice = styled(Button)(() => ({
    '&.ant-btn': {
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
        color: theme.colors.primary,
        backgroundColor: 'transparent',
        marginLeft: 30,
        ':hover': {
            color: theme.colors.primary,
            backgroundColor: 'transparent',
        }
    }
}))

export const PriceRanges = React.forwardRef((props: any, ref) => {

    const { control } = props;

    const { fields, append, remove, insert } = useFieldArray(
        {
            control,
            name: "ranges"
        }
    );

    if (fields) {
        return (<div>
            <DivFlex style={{ width: '100%' }} ref={(dom: any) => ref = dom}>
                <DivFlexWrap>
                    {/* key của fieldArray bắt buộc dùng item.id */}
                    {fields && fields.map((item: any, index: number) => (<DivFlex key={item.id}>
                        {
                            fields.length !== index + 1 ?
                                <>
                                    <Controller
                                        name={`ranges.${index}.min`}
                                        control={control}
                                        render={({ field }) => (
                                            <DivFlexItem>
                                                <label htmlFor="">Khoảng {index + 1}: Từ</label>
                                                <Input type="number" {...field} />
                                            </DivFlexItem>
                                        )}
                                    />
                                    <Controller
                                        name={`ranges.${index}.max`}
                                        control={control}
                                        render={({ field }) => (
                                            <DivFlexItem>
                                                <label htmlFor="">Đến</label>
                                                <Input type="number" {...field} />
                                            </DivFlexItem>
                                        )}
                                    />
                                </>
                                : <>
                                    <Controller
                                        name={`ranges.${index}.min`}
                                        control={control}
                                        render={({ field }) => (
                                            <DivFlexItem>
                                                <label htmlFor="">Khoảng {index + 1}: Từ</label>
                                                <Input type="number" {...field} />
                                            </DivFlexItem>
                                        )}
                                    />
                                    <Controller
                                        name={`ranges.${index}.max`}
                                        control={control}
                                        render={({ field }) => (
                                            <DivFlexItem>
                                                <label htmlFor="">Trở lên</label>
                                                <Input style={{ visibility: 'hidden' }} type="number" {...field} />
                                            </DivFlexItem>
                                        )}
                                    />
                                </>
                        }
                        {
                            fields.length > 1 && fields.length !== index + 1 ? <Button type="primary" icon={<MinusCircleOutlined />} onClick={() => remove(index)}></Button> : null
                        }
                    </DivFlex>))}
                </DivFlexWrap>
            </DivFlex>
            <div>
                <ButtonAddRangePrice type="primary" icon={<PlusCircleOutlined />} onClick={() => insert(fields.length, { min: null, max: null })}>Thêm khoảng giá</ButtonAddRangePrice>
            </div>
        </div>)
    } else {
        return (<></>);
    }
})