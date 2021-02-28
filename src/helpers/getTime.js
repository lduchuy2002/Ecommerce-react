const getTime = () =>
{
  const date = new Date();
  const time = date.toTimeString().split(":");
  return {
    date: date.getDate(),
    hours: time[0],
    minutes: time[1],
    seconds: time[2].split(" ")[0]
  }
}
export default getTime;