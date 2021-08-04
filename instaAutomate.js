//here,we are creating a varaible to store the time period b/w the lines, as it required to keep delay otherwise it will cause an error.
var timeinc=2000;
//here,we are creating a varaible to store the time period b/w the lines, as it required to keep delay otherwise it will cause an error.
var timeinc=2000;
//RUNNING THE FOR LOOP, WE CAN INCREASE THE OCCURENCE OF THIS LOOP
for(let i=0 ; i<100 ; i++){
//SETTING THE TIMER AND RUNING THE STATEMENT, THAT WILL FORST DO FOLLOW THE ACCOUNT
    setTimeout(()=>{
       document.getElementsByClassName("_5f5mN")[0].click()
    },timeinc)
    //AGAIN, INCEASING THE TIME LIMIT.
    timeinc+=2000
//THIS,WILL BE DOING THE UNFOLLOW 
    setTimeout(()=>{
       document.getElementsByClassName("_5f5mN")[0].click()
    },timeinc)
    timeinc+=2000
//THIS, WILL BE DOING THE FOLLOW AGAIN
    setTimeout(()=>{
       document.getElementsByClassName("aOOlW -Cab_    ")[0].click()
    },timeinc)
    timeinc+=2000
}
