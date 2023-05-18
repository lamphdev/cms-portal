import moment from 'moment'

export const formatDateTime = (date: Date, format: string) => {
  return moment(date).format(format)
}
