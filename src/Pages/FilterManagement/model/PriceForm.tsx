import styled from "@emotion/styled"
import { Checkbox, Input } from "antd";
import { useForm, Controller } from "react-hook-form"
import { PriceRanges } from "./PriceRanges";

const PriceFormStyle = styled.div`
`;

const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    &.minMax{
        input {
            text-align: center;
            width: 150,
        }
    }
    &.ranges{
        margin-top: 20px;
    }
`;

const Div = styled.div`
    width: 100%;
`;

const DivFlex = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    label: {
        paddingRight: 8,
    },
    input: {
        width: 150,
    },
    '&.mixMax': {
        justifyContent: 'flex-start',
    }
}))

const DivFlexMinMax = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingRight: 39,
    gap: 25,
}))


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
        console.log(getValues());
    }
    console.log(getValues());
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
                <DivFlexMinMax>
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
                </DivFlexMinMax>
            </DivFlex>
            <Item>
                <Controller
                    name="checkedRange"
                    control={control}
                    render={({ field }) => (
                        <Div>
                            <Checkbox type="checkbox" checked={field.value} onChange={field.onChange}>Khoảng giá (VND)</Checkbox>
                        </Div>
                    )}
                />
            </Item>
            <PriceRanges control={control} />
        </form>
    </PriceFormStyle>)
}