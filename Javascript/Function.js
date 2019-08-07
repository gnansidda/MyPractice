        function add(){
            num1 = document.getElementById("firstNumber").value;
            num2 = document.getElementById("SecondNumber").value;
            document.getElementById("result").innerHTML = parseInt(num1,10) + parseInt(num2,20);          
       }
        function sub(){
            num1 = document.getElementById("firstNumbere").value;
            num2 = document.getElementById("SecondNumber").value;
            document.getElementById("result").innerHTML = num1-num2;
        }
        function mul(){
            num1 = document.getElementById("firstNumber").value;
            num2 = document.getElementById("SecondNumber").value;
            document.getElementById("result").innerHTML = num1*num2;
        }
        function div(){
            num1 = document.getElementById("firstNumber").value;
            num2 = document.getElementById("SecondNumber").value;
            document.getElementById("result").innerHTML = num1 / num2;
        }
                