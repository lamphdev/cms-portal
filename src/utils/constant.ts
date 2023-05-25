
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';

export const MyDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig);

export const DATE_FORMAT = "DD/MM/YYYY";

export const disabledDateTomorrow = (date: any) => {
    return date.isAfter(moment());
}