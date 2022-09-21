//Asynchronous file system 
//provide callback, run when functionality is done
const {readFile, writeFile, write} = require('fs');
console.log('start');
const first = readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return 
    }
    const second = result;
    writeFile('./content/result-async.txt', `Here is result : ${first}, ${second}`,{flag:'a'}, (err,result)=>{
        if(err)
        {
        console.log(err);
        return;
        }
        console.log(result);
        console.log('done with the task');
    });

})
console.log('starting next task');

//if we dont provide utf-8 we get buffer encoding

