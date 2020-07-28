function readtext() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    var req = new XMLHttpRequest();

    if ((account == "shinyogood" && password == "2580369b") || (account == "123" && password == "123"))
      {
        req.open("get", shinyo1357.github.io/home.html)
      }
    else
      {
        alert("您的帳號或密碼輸入錯咯!");
      }
}