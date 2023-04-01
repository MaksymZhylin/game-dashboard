function getDaySuffix(dayNum) {
  if (dayNum >= 11 && dayNum <= 13) {
    return 'th';
  }
  switch (dayNum % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export default function formatDate(inputDateStr) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [day, month, year] = inputDateStr.split('-');
  /* eslint-disable radix */
  const monthName = months[parseInt(month) - 1];

  const daySuffix = getDaySuffix(parseInt(day));
  const dayNum = parseInt(day).toString();

  return `${monthName} ${dayNum}${daySuffix}, ${year}`;
}
