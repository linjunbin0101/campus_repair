<?php
//首先接收从前端发送过来的数据，然后给这些数据取个名字，也就是$XXX
    $no_maintainer = $_POST["no_maintainer"];
    $pass_maintainer = $_POST["pass_maintainer"];
    $phone_maintainer = $_POST["phone_maintainer"];
//造连接对象
    $conn = mysqli_connect("150.158.174.151", "root","1258012580Aa/","repair");//连接MYSQL数据库,‘后台地址，账户，密码，表名字’
    if (mysqli_connect_errno())//如果连接错误，就返回数据error到前端。
    {
        echo "mistake: " . mysqli_connect_error();
    }
//UPDATA是更新函数用来更新密码，SET用来把从前端发送过来的数据先md5加密化然后传递给accout_password，updata更新这个数据库里面的account_password
    mysqli_query($conn,"UPDATE login_maintainer SET pass_maintainer=('$pass_maintainer'),phone_maintainer=('$phone_maintainer')  WHERE no_maintainer=('$no_maintainer')");

    mysqli_close($conn);//最后关闭连接，你总不可能一直把家门打开吧。
?>