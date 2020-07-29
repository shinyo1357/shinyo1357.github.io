function readtext() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;

    if ((account == "shinyogood" && password == "2580369b") || (account == "123" && password == "123"))
      {
        document.getElementById("form").innerHTML = '<a href="/%E5%9C%96%E7%89%87%E8%B3%87%E6%96%99/3.png" download>Download the picture</a>';
      }
    else
      {
        alert("您的帳號或密碼輸入錯咯!");
      }
}