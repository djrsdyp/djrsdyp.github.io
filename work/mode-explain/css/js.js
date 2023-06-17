const currentDate = new Date();
const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const currentMonthIndex = currentDate.getMonth();
const currentMonthAbbreviation = monthNames[currentMonthIndex];
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();


document.addEventListener('DOMContentLoaded', () => {
    const monthElement = document.getElementById('currentMonth');
    monthElement.textContent = currentMonthAbbreviation;
    const dayElement = document.getElementById('currentDay');
    dayElement.textContent = currentDay;
    const yearElement =

        document.getElementById('currentYear');
    yearElement.textContent = currentYear;
});

