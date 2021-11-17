<script>
      import Async from '../stores/async.js';
         //initailize
        let data;
        const request=new XMLHttpRequest();


    
        request.addEventListener('readystatechange',()=>{
            //give the state that the current request is in
            // console.log(request,request.readyState);

            // do something with the data recieved
            if(request.readyState === 4 && request.status === 200){
                // console.log(request.responseText);
                data=request.responseText;
            }
        });

        //type of request
        request.open('GET','https://jsonplaceholder.typicode.com/todos');
        request.send();
    
   
</script>

<div class="m-20">
    <h1 class="my-2 text-center font-light text-xl uppercase">Get Data</h1>
    <pre class="border">
       <p class="overflow-y-scroll  h-52">
        {data}
        {#if request.status != 200}
        <p>404 page not found</p>
   
        {/if}
       </p> 
    </pre>  
</div>