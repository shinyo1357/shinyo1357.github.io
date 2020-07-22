function readtext() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    
    if (account == "shinyogood"&&password == "2580369b")
      {
        window.location.href='http://www.google.com';
      }
    else
      {
        alert("您的帳號或密碼輸入錯咯!")
      }
}