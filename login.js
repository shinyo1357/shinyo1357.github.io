function readtext() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;

    if ((account == "shinyogood" && password == "2580369b") || (account == "123" && password == "123"))
      {
        document.getElementById("form").innerHTML = '<a href="https://drive.google.com/file/d/1WJx1OGBGpFxSWOENK8r2rZL7_oAWfeaJ/view?usp=sharing" download="OOF.png"><button>快按我!</button></a>';
      }
    else
      {
        alert("您的帳號或密碼輸入錯咯!");
      }
}