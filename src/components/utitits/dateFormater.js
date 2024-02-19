import moment from 'moment'

const DateFormatter = (date) => {
  const formattedDate = moment(date).format('DD MMMM YYYY')
  return formattedDate
}

export default DateFormatter
