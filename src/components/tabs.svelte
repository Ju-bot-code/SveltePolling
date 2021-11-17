<script>
    import {createEventDispatcher} from 'svelte';
    export  let items;
    export  let activeItem;

    const dispatch=createEventDispatcher();

</script>

<div title="tabsList">
    <div class="tabs tabs-boxed bg-white shadow-md mt-3">
        <ul>
            {#each items as item }
            <li class="tab" 
              on:click={()=>dispatch('makeActive',item)}
              class:tab-active={item === activeItem}>
                {item}
            </li> 
           
            {/each}
        </ul>
      </div>
      
</div>
<style>
    
</style>