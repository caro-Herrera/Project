window.onload = () => {

    //Copyright Date
    let thisYear = new Date().getFullYear();

    document.getElementById('copyright').innerHTML = thisYear;

    console.log(thisYear);

    //Alert
   document.getElementById("alert").onclick = () => {
    alert("business page coming soon");
   };

   //Hover
   document.getElementById("insta-business").onmouseover = () => {
    document.getElementById("insta-business").innerText = "@trend.design_";
   };

   document.getElementById("insta-business").onmouseleave = () => {
    document.getElementById("insta-business").innerText = "Trend Design";
   };

   //Counter
   let count = 0;

   document.getElementById("counter").onclick = () => {
   count = count + 1;
   document.getElementById('counter-text').innerHTML = count;
   if (count % 2 == 0) {
    document.getElementById('counter-text').classList.add("even");
    document.getElementById('counter-text').classList.remove("odd");
   } else {
    document.getElementById('counter-text').classList.add("odd");
    document.getElementById('counter-text').classList.remove("even");
   }
   };

   //numbers
   const numberList = document.getElementById("numbers");
   for (let index = 1; index <= 100; index = index + 1) {
   const even = index % 2 == 0;
   document.createElement("li").textContent = even ? "even" : "odd";
   document.getElementById('numbers').appendChild(document.createElement('li'));
   };

};