 function  gitdata()
{      
    let name=document.getElementById("userInput").value;
    let mark=document.getElementById("markInput").value;
    let fullmark=document.getElementById("fumllmarkInput").value;
     var total = mark/fullmark*100;

if(total>=95)
{
document.getElementById("output","<h2>Execllemt</h2>",total ).innerText =fullmark;
}
else if(total>=85)
{
document.writeln("<h2>very good</h2>" );
}
else if(total>=75)
{
document.writeln("<h2>good</h2>" );
}
else if(total>=65)
{
document.writeln("<h2>almost good</h2>" );
}
else if(total>=50)
{
document.writeln("<h2>pass</h2>" );
}
else{
    document.writeln("<h2>fail</h2>" );
}
}
 console.log("for more update follwe me:@1wolfxe");
 