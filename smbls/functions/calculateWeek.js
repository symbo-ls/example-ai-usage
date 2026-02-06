export const calculateWeek = function calculateWeek(index) {

    // Generate date ranges based on index
    // Starting from April 1st and creating week ranges
    if (index === 0) return ''; // First child has no date

    const startApril = new Date(2025, 3, 1); // April 1, 2025
    const startDay = new Date(startApril);
    startDay.setDate(startDay.getDate() + (index - 1) * 7); // Add weeks

    const endDay = new Date(startDay);
    endDay.setDate(endDay.getDate() + 6); // End is 6 days later

    // Format the dates
    const startDate = startDay.getDate();
    const endDate = endDay.getDate();
    const startMonth = startDay.toLocaleString('en-US', {
      month: 'short'
    });
    const endMonth = endDay.toLocaleString('en-US', {
      month: 'short'
    });

    if (startMonth === endMonth) {
      return `${startDate}-${endDate} ${startMonth}`;
    } else {
      return `${startDate} ${startMonth}-${endDate} ${endMonth}`;
    }
  }