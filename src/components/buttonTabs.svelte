<script>

    
    let tabItems=['tab1','tab2','tab3','tab4','tab5'];

    let activeItime='tab1';
    let index;
  

    const active=(item)=>{
       activeItime=item;  
    }
    // console.log(tabItems[0]);

    const increment=()=>{
        let n =tabItems.length - 1;
        // console.log(n);
        for (let index = 0; index < tabItems.length; index++) {
            if(n === index){
                // console.log('yes');

                activeItime=tabItems[0];
                break;   
             }
            
            if(tabItems[index] === activeItime){

            index +=1;
            // console.log(index);
            activeItime=tabItems[index];
            break;
            
            }
         }
    }

    const decrement =()=>{

        for (let index = 0; index < tabItems.length; index++) {
            let n =tabItems.length -1;

            if(tabItems[0] === activeItime){
            activeItime=tabItems[n];
            break;   
            }

            if(tabItems[index] === activeItime){

            index -=1;
            
            activeItime=tabItems[index];
            break;
            
            }

            
         }
     
    }
    

</script>

<div class="tabs m-10">
    <button on:click={decrement} class="text-xl p-3 rounded-full ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg> 
    </button>
        {#each tabItems as item}
            <div on:click={()=>active(item)} class:tab-active={activeItime === item} class="tab tab-bordered inline-block">{item}</div> 
        {/each}
    <button
        on:click={increment}
         class="text-xl p-3 rounded-full ">  
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
    </button>
  </div>
  