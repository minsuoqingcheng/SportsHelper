/**
 * Created by lc on 2016/10/14.
 */
function doSubmit(){


    if($("#userName").val().length<=0){
        $(".userName").addClass("has-warning");
        if($(".name-warning-pic").length<=0){
            $(".userName").append('<span class="name-warning-pic glyphicon glyphicon-warning-sign form-control-feedback"></span>');
        }
        return false;
    }

    if($("#passWord").val().length<=0){
        alert("密码不能为空");
        return false;
    }

    //$("#form1").submit();
    return true;

}
