function guidGenerator() {
  function S4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(20).substring(1);
  }
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}
function getDate() {
  var today = new Date();

  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return (today = dd + "." + mm + "." + yyyy);
}
export default class Todo {
  constructor(descriptionText, isDone, date, completeDate, id) {
    this.descriptionText = descriptionText || "";
    this.isDone = isDone || false;
    this.date = date || getDate();
    this.id = id || guidGenerator();
  }
}
