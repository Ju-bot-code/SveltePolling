
    //BASICS

    //GET DATA WITH A FUNCTION(OLD WAY)

    // const todos=(response,callback)=>{
    //      //initailize

    //     const request=new XMLHttpRequest();

    //     request.addEventListener('readystatechange',()=>{
    //         //give the state that the current request is in
    //         // console.log(request,request.readyState);

    //         // do something with the data recieved
    //         if(request.readyState === 4 && request.status === 200){
    //             //   console.log(request.responseText);
    //             //   data=request.responseText;

    //         const data =JSON.parse(request.responseText);
    //             //err ,data
    //             callback(undefined , data);
    //         }
    //         else if(request.readyState === 4){
    //             // console.log('could not fetch the data');

    //             //err ,data
    //             callback('could not fetch data' , undefined);
    //         }
    //     });

    //     //type of request
    //     request.open('GET',response);
    //     request.send();

    // }

    //CALLING THE FUNCTION TO GET THE DATA(OLD WAY)

    // let value =todos('https://jsonplaceholder.typicode.com/todos', (err,data)=>{
    //     console.log('callback fired');
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(data);
    //     }
    // });


    //PROMIS BASICS(OLD WAY)

    // const getSomeThing=()=>{
    //          // resolve and reject are api inbulit functions
    //         return new Promise((resolve,reject)=>{     
    //             // if the data passed is resolved
    //             // resolve('here is the data ');
    //             //if the data gets some error and is rejected
    //             reject('error has occured ');
    //         });
    // }

    //CALLING FUNCTION WITH PROMISE(OLD WAY)

    //#1 call back with promise 

    // getSomeThing().then(
    //     (data)=>{console.log(data); },
    //     (err)=>{console.log(err);}
    // )

    //#2 call back with promise WITH CATCH

    // getSomeThing().then(data=>{
    //     console.log(data);
    // }).catch(err=>{
    //     console.log(err);
    // })

    
    //GET DATA WITH A FUNCTION WITH PROMISE(OLD WAY)

    // const todos=(response)=>{
    //     return new Promise((resolve,reject)=>{

    //         const request=new XMLHttpRequest();
    //         request.addEventListener('readystatechange',()=>{

    //             if(request.readyState === 4 && request.status === 200){
    //                 const data =JSON.parse(request.responseText);
    //                 resolve(data); //resolve
    //             }
    //             else if(request.readyState === 4){
    //                 reject('An error has occured'); //reject
    //             }
    //         });

    //         request.open('GET',response);
    //         request.send();

    //     });
    // };

    //CALLING THE FUNCTION TO GET THE DATA

    // const value=todos('https://jsonplaceholder.typicode.com/todos').then(data =>{
    //                 console.log(data);
    //             }).catch(err=>{
    //                 console.log(err);
    //             });



    //CHAINING PROMISES(OLD WAY)  
    
    // const value=todos('https://jsonplaceholder.typicode.com/todos').then(data1=> //data1
    //             {
    //                 console.log('promise one resolved ',data1);         //data1
    //                 return todos('https://jsonplaceholder.typicode.com/todos')   //data2
    //             }).then(data2=>{
    //                 console.log('promise 2 resolved',data2);         //data2
    //                 return todos('https://jsonplaceholder.typicode.com/todos');  //data3
    //             }).then(data3=>{                //data3
    //                 console.log('promise 3 resolved',data3);
    //             }).catch(err=>{
    //                 console.log(err)
    //             })
               

    //FETCH API(OLD WAY)          
               
    // const value =fetch('https://jsonplaceholder.typicode.com/todos').then(response=>{
    //     console.log('response: ',response);
    //     //behaves like chaining promiese
    //     return response.json(); //actual data in here
    // }).then(data=>{
    //     console.log(data); // logging that actual data
    // }).catch(err=>{
    //     console.log(err);
    // })


    //ASYNC AWAIT

    const todos =  async ()=>{

        const resource= await fetch('https://jsonplaceholder.typicode.com/todos');
        if(resource.status !== 200 ){
            throw new Error('could not fetch the data');
         }
        const data= await resource.json();
        return data;
    }
     const value= todos()
                    .then(data=>console.log(data))
                    .catch(err=>console.log(err));

     export default value;