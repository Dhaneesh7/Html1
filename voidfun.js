function add()
{
    let a=document.getElementById("first").value
    let b=document.getElementById("second").value
    let res=document.getElementById("result")
    c=eval(a)+eval(b)

    var add=addEventListener("click",function(event){
        if(a==" "||b=="")
        {
            this.alert("enter a value")
            this.event.preventDefault;
        }
        else
        {  res.value="";
            res.value=res.value+c;
        
        

        }
    })

    
   
}
function sub()
{
    let a=document.getElementById("first").value
    let b=document.getElementById("second").value
    let res=document.getElementById("result")
    c=eval(a)-eval(b)
    
    var add=addEventListener("click",function(event){
        if(a==" "||b=="")
        {
            this.alert("enter a value")
            this.event.preventDefault;
        }
        else
        {res.value="";
            res.value=res.value+c;
        
        

        }
    })

}
function mul()
{let a=document.getElementById("first").value
    let b=document.getElementById("second").value
    let res=document.getElementById("result")
    c=eval(a)*eval(b)
    
    var add=addEventListener("click",function(event){
        if(a==" "||b=="")
        {
            this.alert("enter a value")
            this.event.preventDefault;
        }
        else
        {res.value="";
            res.value=res.value+c;
        
        

        }
    })


    

}
function div()
{
    let a=document.getElementById("first").value
let b=document.getElementById("second").value
let res=document.getElementById("result")
c=eval(a)/eval(b)

var add=addEventListener("click",function(event){
    if(a==" "||b=="")
    {
        this.alert("enter a value")
        this.event.preventDefault;
    }
    else
    {res.value="";
        res.value=res.value+c;
    
    

    }
})



}
function modu()
{
    let a=document.getElementById("first").value
let b=document.getElementById("second").value
let res=document.getElementById("result")
c=eval(a)%eval(b)

var add=addEventListener("click",function(event){
    if(a==" "||b=="")
    {
        this.alert("enter a value")
        this.event.preventDefault;
    }
    else
    {res.value="";
        res.value=res.value+c;
    
    

    }
})


}
function clr()
{
  var clrs=addEventListener("click",function(event){
    this.document.getElementById("first").value="";
    this.document.getElementById("second").value="";
    this.document.getElementById("result").value="";
    event.preventDefault();


  })   
}