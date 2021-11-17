<script>
    import pollStore from '../stores/pollStore';
    import {fade , slide ,scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import PollDetails from './PollDetails.svelte';
    // export let polls =[];

    // pollStore.subscribe(data=>{
    //     polls=data;
    // });

    // console.log($pollStore);
</script>
<div class="my-10 w-full max-w-5xl mx-auto p-6 ">
    <!-- polls.voteA -->
    <h1 class="uppercase text-2xl font-thin text-center my-3">Polls</h1>
    <div class="grid grid-cols-2 gap-4">
        {#each $pollStore as poll (poll.id) }
            <div in:slide out:scale|local  animate:flip={{duration : 500}}>
                <PollDetails {poll}  on:changeActive/>
            </div>
        {/each}
      

    </div>
</div>