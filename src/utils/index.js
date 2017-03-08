export default {
  formatTime(date = {}) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getMilliseconds();
    return [year, month, day, hour, minute, second].join('-');
  },
}
