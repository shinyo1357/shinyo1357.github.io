function readtext() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;

    if ((account == "shinyogood" && password == "2580369b") || (account == "123" && password == "123"))
      {
        document.getElementById("form").innerHTML = "123";
      }
    else
      {
        alert("您的帳號或密碼輸入錯咯!");
      }
}