<script>
    import {tweened} from 'svelte/motion';

    let open =false;

    const showMore=()=>{
        open= !open;
    }
    const checkForOPen=()=>{

        if(open === true){
            open=false;
        }
    }

    const value =tweened(0);
</script>


<div on:click|self={checkForOPen} class="bg-white w-full flex justify-center m-10">

    <div class=" {open ? 'bg-white shadow rounded-md' : ' bg-white shadow rounded-md'} "> 
        <div on:click={showMore} class=w-full>
            <h1 class="font-light uppercase text-sm text-gray-900 px-20 py-2 w-full
                {open ? 'bg-white  shadow  rounded-md ' : ' bordered bg-gray-white shadow-md'}
                ">
                tiny form
            </h1>
        </div>
        {#if open}
            <div class="m-2 flex justify-center items-center">
                open
            </div>
        {/if}

    </div>
    
</div>


<div class="bg-white w-full flex justify-center m-10">
    <div>
        <h1 class="font-light uppercase text-sm text-gray-900 px-20 py-2 w-full">Tweening</h1>
        <br>
        <h2> value : {$value}</h2> 
        <br>
        <button on:click={()=>value.set(1)}
            class="border p-2 rounded-md block w-full">
            tween
        </button>
    </div>        
</div>
