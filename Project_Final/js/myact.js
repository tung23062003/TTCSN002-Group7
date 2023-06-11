
        function vg() {
            document.getElementById("1_1").style.display = "block";
            // document.getElementById("1_2").style.display = "none";
            document.getElementById("1_3").style.display = "none";
            document.getElementById("1_4").style.display = "none";
            document.getElementById("1_5").style.display = "none";
            // document.getElementById("1_6").style.display = "none";
        }
        function vg1() {
            // document.getElementById("1_2").style.display = "block";
            document.getElementById("1_1").style.display = "none";
            document.getElementById("1_3").style.display = "none";
            document.getElementById("1_4").style.display = "none";
            document.getElementById("1_5").style.display = "none";
            // document.getElementById("1_6").style.display = "none";
        }

        function vg2() {
            document.getElementById("1_3").style.display = "block";
            document.getElementById("1_1").style.display = "none";
            // document.getElementById("1_2").style.display = "none";
            document.getElementById("1_4").style.display = "none";
            document.getElementById("1_5").style.display = "none";
            // document.getElementById("1_6").style.display = "none";
        }
        function vg3() {
            document.getElementById("1_4").style.display = "block";
            document.getElementById("1_1").style.display = "none";
            // document.getElementById("1_2").style.display = "none";
            document.getElementById("1_3").style.display = "none";
            document.getElementById("1_5").style.display = "none";
            // document.getElementById("1_6").style.display = "none";
        }
        function vg4() {
            document.getElementById("1_5").style.display = "block";
            document.getElementById("1_1").style.display = "none";
            // document.getElementById("1_2").style.display = "none";
            document.getElementById("1_3").style.display = "none";
            document.getElementById("1_4").style.display = "none";
            
        }
        
        function check() {
            var passwordInput = document.getElementById("passwordInput");
            var errorText2 = document.getElementById("errorText2");
            var password2 = passwordInput.value;
            var passwordInput1 = document.getElementById("passwordInput1");
            var errorText1 = document.getElementById("errorText1");
            var passwordInput3 = document.getElementById("passwordInput3");
            var errorText3 = document.getElementById("errorText3");
            var tt = 0;
            if (password2.length < 8 || password2.length > 32 || !/\d/.test(password2) || !/[a-zA-Z]/.test(password2)) {
                errorText2.style.display = "block";
            } else {
                errorText2.style.display = "none";
                tt++;
            }
            if (passwordInput1.value.trim() === "") {
                errorText1.style.display = "block";
                event.preventDefault(); // Ngăn chặn hành vi mặc định của nút Submit
            }
            else {
                errorText1.style.display = "none";
                tt++;
            }
            if (passwordInput3.value.trim() === "") {
                errorText3.style.display = "block";
                event.preventDefault(); // Ngăn chặn hành vi mặc định của nút Submit
            }
            else {
                errorText3.style.display = "none";
                tt++;
            }
            if (passwordInput.value !== passwordInput3.value) {
                errorText3.textContent = "Mật khẩu không khớp.";
                errorText3.style.display = "block";
                event.preventDefault();
            }
            else {
                errorText3.style.display = "none";
                tt++;
            }
            if (tt === 4)
                alert("Thay đổi mật khẩu thành công ! ");
            document.getElementById('password-form').reset();

        }
        function vg5(){
            alert("Bạn muốn đăng xuất ?");
            event.preventDefault();
            window.location.href ="login.html"
        }

