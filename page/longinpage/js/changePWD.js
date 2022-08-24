
jQuery(document).ready(function() {

    
    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        var password1 = $(this).find('.password1').val();
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
       else if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
        else if(password.length<6) {
            $(this).find('.errors1').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.errors1').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
        else if(password1 == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '165px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
        else if(password1 != password)
         {
            $(this).find('.errors2').fadeOut('fast', function(){
                $(this).css('top', '165px');
            });
            $(this).find('.errors2').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
       else{
        alert("修改成功！！")
        
       }
       
       location.href=("login.html");
       return true;
    });

    $('.page-container form .username, .page-container form .password,.page-container form .password1').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
        $(this).parent().find('.errors').fadeOut('fast');
        $(this).parent().find('.errors1').fadeOut('fast');
        $(this).parent().find('.errors2').fadeOut('fast');
    });

});
