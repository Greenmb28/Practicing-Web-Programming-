const task_1 = () =>
{
    //Task 1 part a) and b)
    
    let num = prompt("Please enter a number! ");

    console.log("Quantity:",num);

    let percentage = prompt("Please enter a percentage!: ");

    let percent =num/2;
   
    const str = `${percentage}% of Quantity ${num}, is ${percent}`;
    let tsk1 = document.querySelector(".str");
    //tsk1.innerHTML = str;

   console.log(str);
};
 
const task_2 = function()
{
    //a)
    let num = prompt("Please enter a grade number between 1 and 100!");
     num=parseInt(num);
     if (num >= 91)
 {
     console.log("A");
 }
 else if (num >=81 )
 {
     console.log("B");
 }
 else if (num >=71 )
 {
     console.log("C");
 }
 else if (num >=61 )
 {
    console.log("D");
 }
 else if (num >=0 )
 {
     console.log("F");
}
 else
 {
   console.log("Thats not right, Please reenter a number!");
 }
//b)
 //let num = prompt("Please enter a grade number between 1 and 100!");
 num=parseInt(num);
 let num1 = num >=91;
 let num2 = num >=81;
 let num3 = num >=71;
 let num4 = num >=61;
 let num5 = num >=0;
 if (!(isNaN(num)))
{
 switch(num1, num2, num3, num4, num5)
 {
     case   num1:
         console.log("A");
         break;
     case  num2 :
         console.log("B");
         break;
     case  num3 : 
         console.log("C");
        break;
     case  num4 :
         console.log("D");
         break;
     case  num5 :
         console.log("F");
         break;
 }
}
}

const task_3 = function()
{
let prof = prompt("What is the punishing professors name? ");
        let numLine = prompt("What line are you wanting to write? ");
       let num = prompt("How many times would you like the line to be written? ");
      num=parseInt(num);
      for( let line = 1;line <=num;line++)
        {
    const task3Output = (`${line}  ${numLine}`);
    console.log(task3Output);
        }
}
const task_4 = function()
{
    let divLines = document.querySelector(".lines");
    
           // let heading = document.querySelector(".whoIsUmbridge")
    
            let prof = prompt("What is the punishing professors name? ");
            let numLine = prompt("What line are you wanting to write? ");
            let num = prompt("How many times would you like the line to be written? ");
           num= parseInt(num);
           //heading.textContent = "Umbridge";
          let prodStr = "";
          let line = 1;
           while( line <=num )
        {
            let prod = num *line;
             prodStr += `
${line} ${numLine}
              `;
            line++
        }
       //divLines.innerHTML = prodStr;
       console.log(prodStr);
}
const task_5 = function()
{
    const potterInfo = (line,phaseLine) =>
           {
               return(` ${line} ${phraseLine}`);       
           }
         let prof =prompt("What is the punishing professors name? ");
          let phraseLine=prompt("What line are you wanting to write? ");
          let num = prompt("How many times would you like the line to be written? ");
          num= parseInt(num);
          let line = 1;
         while(line <= num)
          {let str= potterInfo(num,phraseLine);
          console.log(str);
          line++;   }
}
const task_6 = function()
{
    //Strategy 1
    let prodStr = "";
       for (let factor1 =1; factor1 <=12; factor1++)
    {
        let num=1;
        num=parseInt(num);
        let prod = num * factor1;
        prodStr += `
        ${num} X ${factor1} = ${prod}
        `;
    }
    for (let factor2 =1; factor2 <=12; factor2++)
   {
        let num=2;
        num=parseInt(num);
        let prod = num * factor2;
        prodStr += `
        ${num} X ${factor2} = ${prod}
        `;
    }
    for (let factor3 =1; factor3 <=12; factor3++)
    {
        let num=1;
 num=parseInt(num);
       let prod = num * factor3;
       prodStr += `
       ${num} X ${factor3} = ${prod}
       `;
   } for (let factor4 =1; factor4 <=12; factor4++)
   {
       let num=4;
        num=parseInt(num);
        let prod = num * factor4;
        prodStr += `
        ${num} X ${factor4} = ${prod}
        `;
   } for (let factor5 =1; factor5 <=12; factor5++)
   {
       let num=5;
       num=parseInt(num);
       let prod = num * factor5;
       prodStr += `
       ${num} X ${factor5} = ${prod}
       `;
   } for (let factor6 =1; factor6 <=12; factor6++)
   {
       let num=6;
        num=parseInt(num);
       let prod = num * factor6;
        prodStr += `
        ${num} X ${factor6} = ${prod}
        `;
    } for (let factor7 =1; factor7 <=12; factor7++)
    {
       let num=7;
       num=parseInt(num);
       let prod = num * factor7;
        prodStr += `
        ${num} X ${factor7} = ${prod}
        `;
    } for (let factor8 =1; factor8 <=12; factor8++)
    {
      let num=8;
        num=parseInt(num);
        let prod = num * factor8;
        prodStr += `
        ${num} X ${factor8} = ${prod}
        `;
    } for (let factor9 =1; factor9 <=12; factor9++)
    {
        let num=9;
        num=parseInt(num);
        let prod = num * factor9;
        prodStr += `
        ${num} X ${factor9} = ${prod}
        `;
    } for (let factor10 =1; factor10 <=12; factor10++)
    {
        let num=10;
        num=parseInt(num);
        let prod = num * factor10;
        prodStr += `
        ${num} X ${factor10} = ${prod}
        `;
    } for (let factor11 =1; factor11 <=12; factor11++)
    {
        let num=11;
        num=parseInt(num);
        let prod = num * factor11;
        prodStr += `
        ${num} X ${factor11} = ${prod}
        `;
    } for (let factor12 =1; factor12 <=12; factor12++)
    {
        let num=12;
        num=parseInt(num);
       let prod = num * factor12;
       
        prodStr += `
        ${num} X ${factor12} = ${prod}
       `;
        
  }
  const task6Output= prodStr;
    console.log(task6Output);
    //Strategy 2
    //Strategy 3
    //Didnt finish 2 and 3
}
const task_7 = () =>
{
    //hoisting is using a variable or a function before it is declared
        //a) a function
        //This code runs without any error, despite the square() function being called before it's declared.
    //b) a variable
        //Being able to use a variable's value in its scope before the line it is declared
    //a) a function
    //console.log(greetings);
    //function greetings()
    //{
   // return("How are you");
   // }
    //b) a variable
    //const vara = function(){
   //console.log(greetings == "How are you");
    //var greetings="How are you" ;
   // }
    //const func = function()
    //{
    //function()
    //{
    //console.log(greetings);
    //var greeting="....";
    //}
    //console.log(vara);
    //console.log(func);
    console.log(`"/hoisting is using a variable or a function before it is declared
        a) a function
        This code runs without any error, despite the square() function being called before it's declared.
    b) a variable
        //Being able to use a variable's value in its scope before the line it is declared
    a) a function
    console.log(greetings);
    function greetings()
    {
    return("How are you");
    }
    b) a variable
    const vara = function(){
   console.log(greetings == "How are you");
    var greetings="How are you" ;
    }
    const func = function()
    {
    function()
    {
    console.log(greetings);
    var greeting="....";
    }"`);

}