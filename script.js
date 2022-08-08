function validateForm(){
    var fn=document.forms["validform"]["firstname"].value;
    var ln=document.forms["validform"]["lastname"].value;
    var pn=document.forms["validform"]["phone"].value;
    var ei=document.forms["validform"]["email"].value;
    var mailformat=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    var pass=document.forms["validform"]["password"].value;
    var passformat=/^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/;
    var conpass=document["validform"]["passwordC"].value;
    var gn=document.forms["validform"]["gender"];
    var count=document.forms["validform"]["country"];

    if (fn==null || fn==""){
        alert("First name can not be blank")
        return false
    }
    if (ln==null || ln==""){
        alert("Last name can not be blank")
        return false
    }
    if (!(pn>=1000000000 && pn<=9999999999)){
        alert("Enter only 10 digit phone number")
        return false
    }
    if (!ei.match(mailformat)){
        alert("You have enterd an invalid Email Id")
        return false
    }
    if (true){
        if (pass.length>=6 && pass.length<=12){
            if (!pass.match(/[A-Z]/m)){
                alert("Enclude a capital letter")
            }
            if (!pass.match(/[a-z]/m)){
                alert("Enclude a small letter")
            }
            if (!pass.match(/[0-9]/m)){
                alert("Enclude a digit")
            }
            if (!pass.match(/[#$@&]/m)){
                alert("Enclude a special character")
            }
        }
        else{
            alert("Your password length should be 6-12")
        }
    }
    if (pass!=conpass){
        alert("Your password is not matched")
        return false
    }
    if ((gn[0].checked==false)&&(gn[1].checked==false)){
        alert("Please enter your gender")
        return false
    }
    if (count.selectIndex==0){
        alert("Enter your country")
        return false
    }
}