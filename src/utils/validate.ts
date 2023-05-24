import moment from "moment";


/**
     * 
     * @param field // field current value
     * @param form // field current form
     * @returns 
     */
export const isBefore = (field: any, form: any) => {
    if (!field || !form.toDate) {
        return true;
    }
    if (field.isBefore(form.toDate)) {
        return true;
    }
    return 'Lỗi Từ ngày phải <= Đến ngày';
}