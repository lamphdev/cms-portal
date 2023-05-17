import { Form } from "antd"


export const FilterList = () => {
    const [form] = Form.useForm();
    return (
        <div>
            Filter
            <div>
                <Form
                form={form}
                >
                    
                </Form>
            </div>
        </div>
    )
}