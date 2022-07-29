
//                             CONCOLE 
 /// testing used 

// console.log("bismillah")
// console.warn("this warning")
// console.error("this error")
// console.time("time start");      its tell about how much porgarm take time 
// console.timeEnd("time start");

// document.getElementById("id of code")    used check any id you used
// document.getElementById("id of code").innerHTML   --- SHOW INNER HTML
//// document.getElementById("id of code").innerText   --- SHOW INNER TEXT



                           // HTML  USED JAVASCRIPT


//   LINK IN JS FILE IN HTML    <script src="index.js"></script
//   USING HTML IN JS FILE       document.write("HTML<br>");
//                               document.write("HTML IS <i>STURCTURE</i> <br>");
///    HTML **********\<button type="button" onclick="myFunction()">Try it</button>


// //  FUNCTION IN JS FILE 
// function myFunction() {
// //     document.getElementById("demo").innerHTML= num1;
// // }

                              //variable
        //    1.var    2. let     3. const
       
        // 1******var
        // nospace and no start with with number
        // var is over ride  if 
        // var x =12; ///and is not used in quote


        // 2******let
        // nospace and no start with with number
        // var is over ride 
        // var x =12;
        // unable to delear variable again
        //let x =12;
        //let x =13;    ///=-------error

        //but
        //let x =12;
        // x =13;    ------ in this case they over-write

        // 3*** const 
        //const x =12;
        //const x =13;    ///=-------error

        //but
        //const x =12;
        // x =13;    ------  also give error


          // 2******let
        // nospace and no start with with number
        // var is over ride 
        // var x =12;





// variable  is used one time and can be change any where you wish

                             
                                  // datatype 
    // below all data type 



// NUM  
// var x = "this id string data type";     ------     string
// var y = 23.1234 //this is number datatype     ------number
// var m = true //----------------------------      --- boolen
// var n = null //--------------------------------------- null
// var v // undefine-------- -----------------      ------undefine
// var s = ["html","css","javascript"]; -----------------      ------ array 
// var o = { first  :"mehar",-----------------      ------object
//           last:"dil"}
//           document.write(o)
                          






                     // arithmetic operation
///      + A    - S    *M     **  E      % MOD   ++ INC     --  DEC
// var a = 2;
// var b = 3;

// var d = a - b;
// var f = a**b;
// var h = a%b;
// ++a;
// var c = a + b;
// document.write(c);
// document.write("<br>");                     
// document.write(d);
// document.write("<br>");
// document.write(f);
// document.write("<br>");
// document.write(h);





//       ////// ASSIGNMENT  OPERATORS 


//      IF COME WITH EQUAL THEN THIS CALL ASSIGNMENT OPERATOR
// =     MEAN X=Y     SAME AS X=Y
// +=       x+=y        same x =x+y
// -=       x-=y        same x =x-y
// *=       x*=y        same x =x*y
//  /=       x/=y        same x =x/y
// **/=       x**=y        same x =x**y
  

// addition
// var x = 12;
// var y = 13;
//  x+= y;
// document.write(x);


// expo
// var x = 2;
// var y = 3;
//  x**= y;
// document.write(x);




// //         123456789012345678901  
// //             ----------------------comparsion operator
// //   x>y    and x>=y  
// //   x<y    and x<=y
// //   x==y x===y(also equal datatye) 
// //    !=   and !==(also datatpe not equal)

// //   var x = 4;
// //   var y = 3;
// //   var z = 2;
// //   console.log(x===y);
// //   ----------------------------------if statement 
// //  if(x==y)
// //  {
// //   document.write(z);
// //  }

// //  if(x===y)
// //  {
// //   document.write(z);
// //  }
// // -----------------------------------------------logical operator
// // if(x==y && x===y)  ---- both must be true 
// // if(x==y || x===y)  ----- any condition 
// // if !(x===y)   ----reverse order answer give  

// // if (!x == 12)
// //  {
// //   document.write("hellos sir g"); -------------------------?????????????
// //  }

// // var x = 12;
// // var y = 3;
// // var z = 2;
// // if (x == 12 && z == 2)          //////////////////////////add
// //  {
// //   document.write("hellos sir g"); 
// //  }


// // var x = 12;
// // var y = 3;
// // var z = 2;
// // if (x == 12 || z == 4)          //////////////////////////or 
// //  {
// //   document.write("hellos sir g"); 
// //  }


// // var x = 12;
// // var y = 3;
// // var z = 2;
// // if (!(x == 11 ))          //////////////////////////   not
// //  {
// //   document.write("hellos sir g"); 
// //  }
 


// /----------------------------------if else statement 
// var m1 = 12;

// if (m1<11)
// {
//   document.write("good work");
// }
// else if (m1 >= 11 && m1 <= 14)
// {
//   document.write("better work");
// }
// else if (m1 >= 14 && m1 <= 20)
// {
//   document.write(" fail work ");
// }
// else
// {
//   document.write("not do work ");
// }



// ///       conditional ternary operator ad cancatitionation





// /   (condition)?  true : false
//     mostly used for only one condition 

// var w =12;
// var v;
// f = "mehardil " + (w >= 12? v ="true": v = "false");
// document.write(f);



// //  switch  statement

// average = 12;

// switch (average) {
//   case 12:
//     document.write("good ");
//     break;
//     case 1:
//     document.write("better ");
//     break;
//     case 1:
//     document.write("fail");
//     break;

//   default:
//     document.write("not good value");
//     break;
// }

// -------------------------------------switch with condition----------------
// var av = 11;

// switch (true) {
//   case (av <= 12):
//     document.write("small ");
//     break;

//     case (av > 12 && av <= 20 ):
//       document.write("better ");
//     break;

//     case (av > 20 && av <= 30 ):
//        document.write("good");
//     break;

//   default:
//     document.write("not good value");
//     break;
// }


// -------------------------------------alert box----------------------
// var x = 12;
// var y = 3;
// var z = 2;    //// only give ok option
// if(x >= y){
//  alert("value of a y :" + y);
// }

// var x = 12;
// var y = 3;
// var z = 2;
// if(x >= y){
//  confirm("value of a y :" + y);  //----------ok and cancel
// }

// ----------------------------------prompt with switch and without
// var y = 3;
// var z = 2;
// if(x >= y){
//  av =prompt("value of a y :" + y); 
//  alert("asdfg") //----------ok and cancel
// }
// switch (true) {
//     case (av <= 12):
//       document.write("small ");
//       break;
  
//       case (av > 12 && av <= 20 ):
//         document.write("better ");
//       break;
  
//       case (av > 20 && av <= 30 ):
//          document.write("good");
//       break;
  
//     default:
//       document.write("not good value");
//       break;
//   }


// //------function


// function meh()
// {
//   document.write("hello");
//   document.write("<br>");
//   document.write("mehardil");
// }

// meh();
// meh();

// with parameter and also given deflaut value in function if no value than print default value
// var x = 12;
// var y = 3;
// var z = 2;
// function meh(a ="enter vlue1",b = "enter vlue2" )
// { document.write("over value is " + (a+b) );
//   document.write("hello");
//   document.write("<br>");
//   document.write("mehardil");
// }

// meh(11,12);


// ------return value ---- also used 1 funct return to another funct


// var x = 12;
// var y = 3;
// var z = 2;
// function meh(a ="enter vlue1",b = "enter vlue2" )
// { 
//   var a = 2*(a+b)
//     return a;
// }
// function dived(re){
//   var t = re/3;
//   return t ;
// }

// var fn = meh(10,10);  // return a given value inside meh(10,10) which store in fn
// document.write(fn);
// var fx = dived(fn);// taking meh function return value as a parameter
// document.write(fx);

// /------ local ariable    &&&& global variable
// -----------------
// var w = "yahoo baba";
// function hell(){
//   document.write(w);
// }
// hell();                         ///---- global
// document.write(w);


// function hell(){
//   var w = "yahoo baba";
//   document.write(w);
// }
// hell();                         ///---- local
// document.write(w);




//   ---------------  event ---  event used to call function .   function run when event call
// click      ----------------key press            
// double click  ----------------key up 
// right ckick     ----------------load  
// mouse hover     ----------------resize  
// mouse out     --------------------------scroll
// mouse down
// mouse up



// function hell(){
//   var w = "yahoo baba";
//   document.write(w); 
// }
// ------------------html ------ we only call function in button not outside 
//  --------------------the button in node js file.
// <html >
// <head>
//     <title>Document</title>
//     <script src="index.js">

//     </script>
    
// </head>
// <body>
    
//     <button onmouseenter="hell()">click me</button>
// </body>

// </html>


// /---------------------loop ---one statement repeat many time 
// loop-----(3 part )1.initialization  2.condition 3. inc & dec

// while
// do/while
// for
// for/in   ------used for object
// foreach   ------used for array
// ----------------------while


// var a=4;              -------initialization
// while(a <= 10){        ----condition
//   document.write("hello g <br>");
//   a =  a+ 1;             ------inc and dec
// }


// ----------------------dowhile   first time no condition check run


// var a=4;             // -------initialization
// do{        //----condition
//   document.write("<ul>hello g <br></ul>");
//   a =  a+ 1;             //------inc and dec
// }
// while(a <= 10)

// ----------------------for   first time no condition check run

// for(var a= 2;a <= 10; a++)
// {
//   document.write(a +"hello g <br>");
// } 

// for(var a= 1;a <= 100; a = a+10)   //check this 1
// {  for(var b= a; b < a+ 10; b++)   // check 11
//   {
//   document.write(b);
// } 
// document.write("<br>");
// }


// for(var a= 5;a >= 1; a--)   //check this 1
// {  for(var b=5; b <=  a ; b--)   // check 11
//   {
//   document.write(a);
// } 
// document.write("<br>");
// }


/------------------------------------------arrray
var ary = [10,20,30,50];
var sum = 0;

document.write("<ol>")
for(a =0; a<=3;a++)
{
  document.write("<li>" + ary[a] + "</li>");
  sum = sum + ary[a];
}
document.write("sum is" + sum);
---------------------------------------------error check this 
var sum = 0;
var ary = new Array();
for(var x =0; x < 3; x++)
{ 
  ary[x] = prompt("enter array value:")
 
}

document.write("<ol>");
for(var a =0; a < 3;a++)
{
  document.write("<li>" + ary[a] + "</li>");
  sum = sum + ary[a];
}
document.write("</ol>");
document.write("sum is" + sum);




var sum1 = 0;
var sum = 0;
var ary = new Array(10,20,30);    /// array can be write in this away if no value are assign
for(var x =0; x < 3; x++)
{ 
  ary[x] = prompt("enter array value:")
  document.write(ary[x]);
  sum1 = sum1 + ary[x];
}

document.write("<ol>");
for(var a =0; a < 3; a++)
{
  document.write("<li>" + ary[a] + "</li>");
  sum = sum + ary[a];
 
}
document.write(sum);

}
document.write("</ol>");
document.write("sum is" + sum);
document.write("sum is" + sum1);


---------------------------multideimensional array


var ary1 =
[
  ["mehar","21","cui"],
  ["ali","21","cui"],
]
document.write("<table  border: 1px solid black cellspacing ='12'>");
for( var a =0; a <= ary1.length; a++)
    {  document.write("<tr>");
       for(var b =0; b <= ary1.length; b++)
      { 
        console.log(ary1[a][b]);
          document.write(`<td>${ary1[a][b]}</td>`);
      }
    document.write("</tr>");
  }
  document.write("</table>");

--------------------------------33333333---------------
   modify and remove  array element

var a = ["Name", 18, "bce"];
a[1] = 20;     /// update value of index 1
document.write(a);
delete a[0];    // delete value of a
document.write("<br>");
document.write(a);

///array method ------ ARRAY -SORTED() FUNCTION

var x = ["mehar","ahmad","zahid"];
document.write(x + "<br>");
-------------------------sort and reverse
x.sort();       // sort alphabetcal order
document.write(x + "<br>");
x.reverse();   // reverse the order of array
document.write(x + "<br>");


-------------------------push and pop
Pop --- it delete form last
push add value at last
x.pop();   //  --delete last value
document.write(x + "<br>");
x.push("fahad");   // add value at last
document.write(x + "<br>");


-------------------------shift and unshift
x.shift();   // --delete first value
document.write(x + "<br>");
x.unshift("ali");   // --add value at first
document.write(x + "<br>");


------------------------- con
var x = ["mehar","ahmad","zahid"];
var b = x.contact("umar","waleed");   // ----error 
document.write(b);

------------------------- concat  and join
var a = ["mehar","ahmad","zahid"];
var b = ["umar","waleed"];
var f = ["umar","waleed"]; //----combine different array in one array;
var c = a.concat(b)
document.write(c);



/   -------------------array    concat[COMBINE TWO OR MORE ARRAY] and  join[CONVERT   ARRAY  TO STRING}  ]

var a = ["mehar","ahmad","zahid"];
var b = ["umar","waleed"];
var f = ["umar","waleed"]; //----combine different array in one array;
var c = a.concat(b +"<br>")
var d =c.join("#")   // make onl;y one string
document.write(d);


/   -------------------splice[GIVE  ARRAY  ANY PART  ADD  NEW ITEM AND ALSO DELETE] 
-----------------------slice[DELETE OR MAKING ARRAY FORM INSIDE ARRAY]

; 
var a = ["mehar","ahmad","zahid"];
var b = ["umar","waleed","dil","gg"];//----combine different array in one array;
var c = a.concat(b +"<br>")
document.write(c + "<br>");                       // make onl;y one string
var m = c.slice(3,5);  //start where first index
var m = c.slice(-2);     //    -5, -4,-3,-2,-1 for negative & for +tive 0,1,2,3,4,5  --->run side
document.write(m)

//splice (index,howmany ,value )  ----> also used for delete

 c.splice(2,1,"asad","hamaza")     //    add     but when used two 2 delete index its delete all the value
 document.write(c); 

c.splice(1,2)     //    add 
document.write(c); 


----------------------------isarray()[CHECK  WEATHER IS ARRAY OR NOT]   check where this is array or not
var a = ["mehar","ahmad","zahid"];
document.write(a + "<br>");
var b = Array.isArray(a);      // check wheather this is array
document.write(b + "<br>");
   if(b)
   {
  document.write("good thing");



----------------------------indexof()[CHECK ITEM LOCATION FORM START]   check where this is array or not
----------------------------LASTindexof()[CHECK ITEM LOCATION FORM END]


var a = ["mehar","ahmad","zahid"];
var b = a.indexOf("ahmad",2);     // GIVE LOCATION OF WHERE OVER ITEMS
document.write(b);

var a = ["mehar","ahmad","zahid"];
var b = a.indexOf("ahmad",2);     // GIVE LOCATION OF WHERE OVER ITEMS
document.write(b);

var a = ["mehar","ahmad","zahid","ahmad"];
var b = a.lastIndexOf("ahmad",2);     // GIVE LOCATION OF WHERE OVER ITEMS
document.write(b);


---------------------------- USED FOR SEARCH ::::::::INCLUDE
var a = ["mehar","ahmad","zahid"];
document.write(a + "<br>");
var b = a.includes("mehar");      // check wheather this is array
document.write(b + "<br>");
   if(b)
   {
  document.write("good thing");
   }
------------------------some()-- [used condition inside the array &   MUST NEED FUNCTION ]  
----- any value match with its value
var t = [10,20,30,40]
document.write(t + "<br>");
var f = t.some(chage);   // check wheather value inside or not
document.write(f);

function chage(t){       // ----- its check value
 t<= 18     
return  t 
}


------------------------every()-- [ must all value true --
                   used condition inside the array &   MUST NEED FUNCTION ]  
var t = [10,20,30,40]
document.write(t + "<br>");
var f = t.every(chage);   // check wheather value inside or not
document.write(f);

function chage(t){       // ----- its check value
 t<= 18     
return  t 
}


----- findindex ----[return the first value  index that clear condition ]
  var t = [10,20,30,40]
document.write(t + "<br>");
var f = t.findIndex(chage);   // check wheather value inside or not
document.write(f);

function chage(t){       // ----- its check value
 t<= 18     
return  t 
}

// ----- findindex ----[return the first value that clear condition ]
var t = [10,20,30,40]
document.write(t + "<br>");
var f = t.find(chage);   // check wheather value inside or not
document.write(f);

function chage(t){       // ----- its check value
 t<= 18     
return  t 
}


----- filter ----[make new array if condition element true of this array ]

var t = [10,20,30,40];
document.write(t + "<br>");
var f = e.filter(chage);   // check wheather value inside or not
document.write(f);
var e 
function chage(e){       // ----- its check value
 e<= 18;     
return  e;
}



// tostring  convert array into string
var t = [10,20,30,40];
--------------------------string
t.toString();
document.write("<br>");
document.write(t);
// simple like document.write
--------------------------value
t.valueOf();
document.write("<br>");
document.write(t);
---------------------------fill
t.fill(10);
document.write("<br>");
document.write(t);

---------------------foreach()// var t = [10,20,30,40];
--------------------------string
var t = [10,20,30,40];

t.forEach(loop);
 function loop(value, index)
 { if(t <= 20){
  document.write(index +"  " + value);
 }}


.......................1234567890-09876543211  
---------------object____--

var a ={
  fname : 'mehar',
  lname :  'dil',
  age   :    22,
  samester : [1,2,3,4,5,6,7],
  gpa:    function(){
    return 3.0;
   },
   fullname  :    function(){
    return this.fname + " " + this.lname;
   },
  bobject: {
    'city' : 'haripur',
    'post' : 'snkharipur',
  
   },
}
console.log(a);
document.write(a.fname);
document.write(a.samester);
document.write(a.gpa());
document.write(a.fullname());
document.write("<br>");
document.write(a.bobject.city);

----------object method 2  update valuee easily   -------
var person = new Object();
{
  person.fname = "MEHAR",
  person.lnme = "DIL";
}
document.write(person.fname);
document.write(person['lname']);

---------------array of object 
var s =
[
{
  name : "ali",       //index 0
   age : "12"
},
{
  name : "mehar",     // index 1
  age : "12"
},
{
  name : "shairi",     //index  2
  age : "12"
},

]

console.log(s);

for (let a = 0; a < s.length; a++) {
  document.write(s[a].name  + "  " + s[a].age   + "<br>");
  
}


change valure of of const variable assign  both  array    and also objects

const a = [1,2,3,4,5];
a[1] =25;   // change index value    
a[2] = 20;

console.log(a)

const b = {
  name : "malok",
  age : 21
};
b.name = "mehar";
b.age =22;
console.log(b);




///     for /in  loop 

var s =
[
{
  name : "ali",       //index 0
   age : "12"
},
{
  name : "mehar",     // index 1
  age : "12"
},
{
  name : "shairi",     //index  2
  age : "12"
}



var obj ={
  fname : 'mehar',   // fname is key   and obj is value of key
  lname :  'dil',
  age   :    22,
  samester : [1,2,3,4,5,6,7],
  gpa:    function(){
    return 3.0;
   },
   fullname  :    function(){
    return this.fname + " " + this.lname;
   },
  bobject: {
    'city' : 'haripur',
    'post' : 'snkharipur',
  
   }
  };

  for (const key in obj) {
    document.write(key + " "  + obj[key] + "<br>");
      
    }
  
//  array value change function...

var a =  [1,2,3,4,5,6,7];
var b = a.map(fun1);
function fun1(x){
  return x*20;
}
document.write(b);


var s =
[
{
  name : "ali",       //index 0
   age : "12"
},
{
  name : "mehar",     // index 1
  age : "12"
},
{
  name : "shairi",     //index  2
  age : "12"
}
]
var b = s.map(fun1);
function fun1(x){
  return x.name  +" "  +  x.age;
}
document.write(b);

//   ___*************************************string method ******************
// var  str =  "malok mehar dil awan";
// var s = str.length;
// document.write(s);


// {
// document.write(a);
// }
// var b = str.includes("malok");       // starts with check start word    &&   end with check start word
// document.write(b);     // same alaphahabet

// var c = str.search("dil");  
// document.write(c);    // if no element than return -1


// var c = str.match("dil");  
// document.write(c);    
//    give chararter value
// var  str =  "malok mehar dil awan";
// var  str1 =  "cui";
// var c = str.charAt(3)
// document.write(c);    // if no element than return -1

//     give decimal code 
// var b = str.charCodeAt(3);
// document.write(c);    // if no element than return -1

// var d = string.charCodeAt(2);
// var f = str.concat(str1);   // combine two string
// document.write(f   + "<br>")

// var f = str1.split("a");  // make array by spliting  string
// document.write(f);
// document.write("<br>");  

// var h = str1.split(2);  // number of time i repeat string
// document.write(h);
// document.write("<br>");  

// var i = str1.slice(2);  // index where we need and convefrt is into new string
// document.write(i);
// document.write("<br>");, 



// var i = str1.substring(2, 5);  // same like silce but its cannot take last value of end 
// document.write(i);
// document.write("<br>"); 

// var so = 50;
// var i = str.toString();  // connvert number into string
// document.write("<br>"); 

// var so = 50;
// var i = str.valueOf();  // connvert number into string
// document.write("<br>"); 




//   ___*************************************number method ******************
// var  x = true
// var  a= "99";
// var no = Number(a);
// document.write( num + 90);
// document.write(x);
// document.write("<br>");

// var  b = "99.1233";
// var no1 = parseInt(b)  // convert value of number and string into int value
// document.write(no1);
// document.write("<br>");

// var  b = "99.1233";
// var no1 = parseFloat(b)  // convert value of number and string into FLOAT value
// document.write(no1);
// document.write("<br>");

// infinite    and Number.isinteger
//TOFIXED(after point) -- round of number you need.
//toprecision(include input) -- 

///-----###########   DOM    ##################----
//GET  --------
//SET  --- text: wellcome we change this into wellcloud 
// ADD HTML E;LEMENT  ---- add h1
// DELETE  HTML ELEMENT   --- delete p

//DOCUMENT  --- <HTML>   ALL THING INSIDE THIS CALLED DOCUMENT  </HTML>
//</HTML> called root node -- all other things called nodes


/// 1234567890098765432111 ----****** target  dom  object
//many node of div h1 and p how we trget this  by using 
// 1. id    /// must used in 1 time  so element on used 
// 2.class/// 
// 3.tag Element   // elements may be classes
// 
// console .log(e)
// document.form
// document.URL
//document.image
// document.image[1]
// document.links
// document.links[2]
// document.form
// document.baseURL
//getelementbyid("1")
//getelementsbyid("1")
//getelementsbyidclass("")  
// if same class used many time than class this in array
//getelementsbytagname("ul")

//**********get[by using get we can get] */
           //html
          //text
         //attributes
      //if script became before load than  body is not loaded

    
// document.getElementById("header").innerHTML    // inner html GET
// document.getElementById("header").innerText  //inner text GET
// document.getElementById("header").getAttribute("id")  //   attributes value GET
// document.getElementById("header").getAttributeNode("onclick") // attributes value GET of function --first
// document.getElementById("header").getAttributes // all attributes get
// document.getElementById("header").getAttributes[1].name //get name of first attributes
// document.getElementById("header").getAttributes[1].value ////get value of first attributes

//      ///set[by using get we can set] */
// document.getElementById("header").innerHTML = <h3>new value</h3>
// document.getElementById("header").innerText = "b value"
// document.getElementById("header").setAttribute("style", "color:  red")
// document.getElementById("header").setAttribute[1].value =  "color:  red"
// document.getElementById("header").removeAttribute("style") // remove attritubes


// //******************query selector */
// //document.queryselector (css selector)
// //document.queryselectorall (css selector)



// document.querySelectorAll(".list")[1].innerHTML = "NEWPART"


// //**********querySelector

// document.querySelector("ul")   // get only first value of ul 
// document.querySelector("li")   // give all li
// document.querySelectorALL("#header").innerText = "JEE"  //SET
// document.querySelectorAll(".list").innerHTML = "NEWPART"


// //                                  css styling using domain
// // .style 
// // .className 
// // .classList


// //style
// document.querySelectorAll("#header").style.colour;//get
// document.querySelector("#sidebar").style.backgroundcolor = "green"//set


// //classname

// document.querySelector("#header").className  //get
// document.querySelector("#header").classNamee = "noone"//set
// document.querySelector("#header").classname  = "noone  abcd"// add more class  + return string
// document.querySelector("#header").classname = "noone  abcd"; //return array
// document.querySelector("#header").classname; //return array
// document.querySelector("#header").classname; //return array

// //classlist
// ocument.querySelector("#header").classList  // return object of class   ---get
// document.querySelector("#header").classList = "noone  abcd"; //set  value
// document.querySelector("#header").classList.add("noone",  "abcd" , "lon"); //add more classes
// document.querySelector("#header").classList.remove("noone",  "abcd" );
// document.getElementById( "header").onclick = abc;
// function abc(){
//   document.getElementById("header").classList.toggle("abcd");
//}
//document.querySelector("#header").classList.item(1)   /// number of class we get
// document.querySelector("#header").classList.contains("meheri")   // return true or false if class exist or not


// }
// ocument.querySelector("#header").length


//add eventlist  ----onclick event occur

// document.getElementById( "").addEventListener(click ,function(){
//   confirm("Enter full name")
// });

// //method 1    -----------------------without event k

// document.getElementById( "header").onclick = abc;
// function abc(){
//   document.getElementById("header").classList.toggle("abcd");
// }

//method 2 ----

  // document.getElementById("header").addEventListener("click" ,abc())

  // document.getElementById("header").removeEventListener("click" ,abc())


// dom traversal   ---- PARENT GET AND ALSO  change there value      parentnode also give text nodes
    
// document.getElementById("header").parentElement;
// <div id=​"wrapper">​…​</div>​
// document.getElementById("wrapper").parentElement;
// <body>​…​</body>​
// document.getElementById("header").parentElement;
// <div id=​"wrapper">​…​</div>​
// document.getElementById("header").parentElement.style.color = "WHITE";
// 'WHITE'
// document.getElementById("header").parentElement.style.color = "BLACK";
//document.getElementById("header").parentNode.innerText

////child GET AND ALSO  change there value    &&   parentnode also give text nodes

// document.getElementById("header").children
// document.getElementById("header").firstElementChild.innerHTML
// document.getElementById("header").lastElementChild.innerHTML


// document.createElement("p")
// <p>​</p>​
// var ne = document.createElement("p")
// undefined
// console.log(ne)
// VM1090:1 <p>​</p>​
// undefined
// var te = document.createTextNode("mehar")
// undefined
// console.log(te)
// VM1353:1 "mehar"
// undefined
// var cee = document.createComment("comment")
// undefined
// console.log(cee)
// VM1895:1 <!--comment-->
// undefined
// ne.appendChild(te)
// "mehar"
// fe = ne.appendChild(te)
// "mehar"
// ne.appendChild(fe)
// "mehar"
// document.getElementById("name").appendChild(ne)
// <p>​mehar​</p>​
// ne.appendChild(ne)
// VM2194:1 Uncaught DOMException: Failed to execute 'appendChild' on 'Node': The new child element contains the parent.
//     at <anonymous>:1:4
// (anonymous) @ VM2194:1
// ne.appendChild(ne)
// VM2286:1 Uncaught DOMException: Failed to execute 'appendChild' on 'Node': The new child element contains the parent.
//     at <anonymous>:1:4
// (anonymous) @ VM2286:1
// console.log(ne)
// VM2341:1 <p>​mehar​</p>​
// undefined
// document
// #document<!DOCTYPE html><html>​<head>​…​</head>​<body>​<h2 style=​"color:​ red;​ background-color:​ black;​">​Login Page ​</h2>​<p>​…​</p>​<div id=​"loginid">​<img class=​"img1" src=​"shopify.jpeg" width=​"100" height=​"100">​<form>​<div id=​"name" class=​"na" onclick=​"abc()​">​<label for=​"fname color:​ red;​">​Enter name :​</label>​<br>​<p>​mehar​</p>​</div>​<input type=​"text" id=​"fname" name=​"fname" value=​"mehardil">​<br>​<div id=​"Pass" class=​"pa">​…​</div>​<input type=​"text" id=​"password">​<br>​<br>​<input type=​"submit" value=​"Submit" onclick=​"mno(s)​">​<div id=​"submit" class=​"sub">​ ​</div>​<!-- <img class="img1" src="shopify.jpeg" alt="Pineapple" width="100" height="100"> --></form>​</div>​<!-- Code injected by live-server --><script type=​"text/​javascript">​…​</script>​</body>​</html>​
// var ne = document.createElement("p")
// var te = document.createTextNode("mehar")
// undefined

// ne.appendChild(te)
// "mehar"
// var tar = document.getElementById("name/")
// undefined
// tar.insertBefore(ne,tar.childNodes[0]);
// <p>​mehar​</p>​
// document
