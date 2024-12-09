function display()
{
 var a=document.getElementById("nm").value
  var b=document.getElementById("phone").value
  var c=document.getElementById("mail").value
  var d=document.getElementById("education").value
  var e=document.getElementById("language").value;
  var f=document.getElementById("skill").value
  displayGender();
            document.getElementById("hed").innerText="resume";
            
            document.getElementById("pn").innerText= "name       : "+a;

            document.getElementById("pm").innerText = "Email     : "   +c;
            document.getElementById("ph").innerText = "Phone     : " + b;
            document.getElementById("pe").innerText = "Education : " + d;
            document.getElementById("pl1").innerText="language   :" ;
            document.getElementById("pl").innerText =  e;
            document.getElementById("ps1").innerText="skill      :";
            document.getElementById("ps").innerText=  f;
            
  
}
function displayGender() {
            var gender = document.querySelector('input[name="gender"]:checked').value;
            document.getElementById("pg").innerText = "Selected Gender: " + gender;
        }