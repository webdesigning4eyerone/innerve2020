let getHiddenClass = document.querySelector(".hidden");
let getContainMain = document.querySelector("main");
let greeting = function () {
  if (validateForm()) {
    getContainMain.setAttribute("style","height:100vh; display:none;")
    getHiddenClass.style.display = "block";
  }
}
function validateForm()
{
  var fields = ["name", "cname", "email", "phone"]

  var i, l = fields.length;
  var fieldname;
  for (i = 0; i < l; i++) {
    fieldname = fields[i];
    if (document.forms["register"][fieldname].value === "") {
      alert(fieldname + " can not be empty");
      return false;
    }
  }
  return true;
}
