const chkpwd = () => {
  const str = document.getElementById("pass").value;
  const msg = document.getElementById("msg");
  if (str.length < 8) {
    msg.innerHTML = "your password is too short";
    msg.style.color = "red";
    return "too short";
  } else if (str.search(/[a-z]/) === -1) {
    msg.innerHTML = "Atleast 1 Small letter Must Be enter";
    msg.style.color = "red";
    return "no lowercase";
  } else if (str.search(/[A-Z]/) === -1) {
    msg.innerHTML = "Atleast 1 Uppercase letter Must Be enter";
    msg.style.color = "red";
    return "no uppercase";
  } else if (str.search(/[0-9]/) === -1) {
    msg.innerHTML = "Atleast 1 Number Must Be enter";
    msg.style.color = "red";
    return "no number";
  } else if (str.search(/[!\@\#\$\%\^\&\(\)\_\+\,\.\;\:]/) === -1) {
    msg.innerHTML =
      "Atleast 1 Special Cheractar Must Be enter Not allowed ~,`,*";
    msg.style.color = "red";
    return "no special charectar";
  } else if (str.match(/[\`\~\*]/)) {
    msg.innerHTML =
      "Atleast 1 Special Cheractar Must Be enter but Not allowed ~,`,*";
    msg.style.color = "red";
    return "Not allowed ~,`,*";
  }
  msg.innerHTML = "!Excellent";
  msg.style.color = "green";
  return "ok";
};
