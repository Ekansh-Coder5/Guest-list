var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName);
    document.getElementById("display_name").innerHTML=  names_of_people;
    
   }

function sorting()
{
    names_of_people.sort();
    var i= names_of_people.join("<br>");
    console.log(names_of_people);       
    document.getElementById("sorted").innerHTML=i;
    }

function show()
{
    var i= names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("p1").innerHTML=i;
    document.getElementById("sort_button").style.display="block";
    }