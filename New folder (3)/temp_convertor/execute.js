
function getResult(){
           const select1=document.getElementById("select1").value;
           const select2=document.getElementById("select2").value;
           let inp=parseFloat(document.getElementById("input").value);
           event.preventDefault();
            if(select1=="Celcius"){
                if(select2=="Celcius"){
                document.getElementById("final").innerHTML=inp;
                }
                else{
                    document.getElementById("final").innerHTML=(inp*1.8)+32;
                }
            }
            else{
                if(select2=="Celcius"){
                    document.getElementById("final").innerHTML=(inp-32)*5/9;
                    } 
                else{
                    document.getElementById("final").innerHTML=inp; 
                }
            }
            
            
     
}

