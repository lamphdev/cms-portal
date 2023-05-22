
import styled from "@emotion/styled";
import { Checkbox, Input, InputNumber } from "antd";
import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 23px;
    flex-wrap: wrap;
    justify-content: space-between;
    input {
        width: fit-content;
    }
`;
const DivSubRange = styled.div`
    width: 100%;
`;

const DivArrayRange = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 25px;
    > div{
        width: 48%;
    }
    input{
        width: fit-content;
    }
`;

export const PriceRanges = React.forwardRef((props: any, ref) => {

    const {control} = props;

    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: "ranges"
        }
    );

    if (fields) {
        return (<DivFlex ref={(dom: any) => ref = dom}>
            <DivSubRange>
                {fields && fields.map((item: any, index: number) => (<DivArrayRange key={index}>
                    <Controller
                        name={`ranges.${index}.min`}
                        control={control}
                        render={({ field }) => (
                            <DivFlex>
                                <label htmlFor="">Khoảng {index + 1}: Từ</label>
                                <Input type="number" {...field}/>
                            </DivFlex>
                        )}
                    />
                    <Controller
                        name={`ranges.${index}.max`}
                        control={control}
                        render={({ field }) => (
                            <DivFlex>
                                <label htmlFor="">Đến</label>
                                <Input type="number" {...field} />
                            </DivFlex>
                        )}
                    />
                    {
                        fields.length > 1 ? <button onClick={() => remove(index)}>remove</button> : null
                    }
                </DivArrayRange>))}
            </DivSubRange>
            <div>
                <button onClick={() => append({min: 0, max: 0})}>+</button>
            </div>
        </DivFlex>)
    }else{
        return (<></>);
    }
})