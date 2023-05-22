import styled from "@emotion/styled"
import { Checkbox, Input } from "antd";
import { useForm, Controller } from "react-hook-form"
import { PriceRanges } from "./PriceRanges";

const PriceFormStyle = styled.div`
`;

const Item = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    &.minMax{
        input {
            text-align: center;
        }
    }
    &.ranges{
        margin-top: 20px;
    }
`;

const Div = styled.div`
    width: 100%;
`;

const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    label{
        // line-height: 32px;
    }
    input {
        width: 100%;
    }
`;

type IProps = {
    item: any
}

export const PriceForm = (props: IProps) => {
    const { control, getValues, handleSubmit, watch } = useForm({
        defaultValues: {
            checkedMinMax: true,
            min: true,
            max: true,
            checkedRange: false,
            ranges: [
                { min: 0, max: 0 },
            ],
            ...props.item,
        }
    });

    const onSubmit = (value: any) => {
        console.log(value);
    }

    return (<PriceFormStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
            <DivFlex className="minMax">
                <Controller
                    name={'checkedMinMax'}
                    control={control}
                    render={({ field }) => (
                        <Checkbox type="checkbox" checked={field.value} onChange={field.onChange} />
                    )}
                />
                <Controller
                    name={'min'}
                    control={control}
                    render={({ field }) => (
                        <DivFlex>
                            <label>Giá Min (VND)</label>
                            <Input type="number" {...field} />
                        </DivFlex>
                    )}
                />
                <Controller
                    name={'max'}
                    control={control}
                    render={({ field }) => (
                        <DivFlex>
                            <label>Giá Max (VND)</label>
                            <Input type="number" {...field} />
                        </DivFlex>
                    )}
                />
            </DivFlex>
            <Item>
                <Controller
                    name="checked"
                    control={control}
                    render={({ field }) => (
                        <Div>
                            <Checkbox type="checkbox" checked={field.value} onChange={(v) => {
                                field.onChange(v.target.checked);
                            }}>Khoảng giá (VND)</Checkbox>
                        </Div>
                    )}
                />
            </Item>
            <PriceRanges control={control} />
            <button type="submit">Submit</button>
        </form>
    </PriceFormStyle>)
}