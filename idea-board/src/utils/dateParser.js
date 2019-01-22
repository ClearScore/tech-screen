export default function (objToday){

    let dayOfMonth = objToday.getDate(),
    curMonth = objToday.getMonth() + 1,
    curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
    curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

    const today = `${curHour}:${curMinute}${curMeridiem} - ${dayOfMonth}/${curMonth}/${curYear}`
    
    return today
}