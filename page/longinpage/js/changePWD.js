function createCode1() {
    code = "";
    var codeLength = 12;//验证码的长度  
    //var checkCode = document.getElementById("code");
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//随机数  
    for (var i = 0; i < codeLength; i++) {//循环操作  
        var index = Math.floor(Math.random() * 36);//取得随机数的索引（0~35）  
        code += random[index];//根据索引取得随机数加到code上  
    }
    //checkCode.value = code;//把code值赋给验证码  
    return code;
}
jQuery(document).ready(function() {

    
    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var inputCode =document.getElementById("Captcha").value.toUpperCase(); //取得输入的验证码并转化为大写
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
                //alert("用户名不正确！");
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        else if(username.length!=11&&username.length!=18) {
            $(this).find('.errors').fadeOut('fast', function(){
                $(this).css('top', '27px');
                //alert("用户名不正确！");
            });
            $(this).find('.errors').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        else if(inputCode!=code){
            $(this).find('.errors1').fadeOut('fast', function(){
                $(this).css('top', '27px');
                //alert("用户名不正确！");
            });
            $(this).find('.errors1').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;

        }
       else{
        var code1=createCode1();
        alert(code1)
        
       }
       
       location.href=("login.html");
       return true;
    });

    $('.page-container form .username, .page-container form .Captcha').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
        $(this).parent().find('.errors').fadeOut('fast');
        $(this).parent().find('.errors1').fadeOut('fast');
  
    });

});
