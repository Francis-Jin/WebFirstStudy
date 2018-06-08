window.onload=function(){
	var user=document.getElementById('username');
	var txt_user=document.getElementById('txt_user');
	var pwd=document.getElementById('pwd');
	var txt_pwd=document.getElementById('txt_pwd');
	var pwd_affirm=document.getElementById('pwd_affirm');
	var txt_pwd_affirm=document.getElementById('txt_pwd_affirm');
	var signIn=document.getElementById('signIn');
	var txt_signIn=document.getElementById('txt_signIn');
// 用户名验证
	user.onfocus=function(){
		txt_user.innerHTML='请输入用户名';
		txt_user.style.color='#ccc';
	}
	user.onblur=function(){
		if(user.value==''){
			txt_user.innerHTML='用户名不能为空';
			txt_user.style.color='red';
			return false;
		}else if(user.value.length<6||user.value.length>16){
			txt_user.innerHTML='请确认用户名是否为6~16位字符';
			txt_user.style.color='red';
			return false;
		}else{
			txt_user.innerHTML='用户名正确';
			txt_user.style.color='green';
			return true;
		}
	}	
	// 密码验证
	pwd.onfocus=function(){
		txt_pwd.innerHTML='请输入用户密码';
		txt_pwd.style.color='#ccc';
	}
	pwd.onblur=function(){
		if(pwd.value==''){
			txt_pwd.innerHTML='密码不能为空';
			txt_pwd.style.color='red';
			return false;
		}else if(pwd.value.length<6||pwd.value.length>16){
			txt_pwd.innerHTML='请确认用户名是否为6~16位字符';
			txt_pwd.style.color='red';
			return false;
		}else{
			txt_pwd.innerHTML='密码正确';
			txt_pwd.style.color='green';
			return true;
		}

	}	
	// 确认密码验证

	pwd_affirm.onfocus=function(){
		txt_pwd_affirm.innerHTML='请再次输入用户密码';
		txt_pwd_affirm.style.color='#ccc';
	}
	pwd_affirm.onblur=function(){
		if(pwd_affirm.value!=pwd.value||pwd.value==false){
			txt_pwd_affirm.innerHTML="两次密码不一致，请重新输入";
			txt_pwd_affirm.style.color="red";
			return false;
	}else{
		txt_pwd_affirm.innerHTML="输入正确";
			txt_pwd_affirm.style.color="green";
			return true;
	}	

}
// 点击验证
	signIn.onclick=function(){
		if (user.value==true&&pwd.value==true&&pwd_affirm.value==true) {
			alert("注册成功");
			return true;
		}else{
			alert("用户名或密码不正确");
			return false;
		}
	}
	
}