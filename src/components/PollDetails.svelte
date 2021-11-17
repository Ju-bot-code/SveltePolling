<script>
    
    import pollStore from "../stores/pollStore";
    import {createEventDispatcher} from 'svelte';
    import Button from "../lib/Button.svelte";
    import {tweened} from 'svelte/motion';
    
    export let poll ;
    const dispact=createEventDispatcher();


    //reactive values
    $: totalVotes =poll.voteA + poll.voteB;

    $: percentageA= Math.floor(100 /totalVotes   *  poll.voteA) ||0;
    $:percentageB=Math.floor(100 /totalVotes * poll.voteB) ||0;

    const tweenedA=tweened(0);
    const tweenedB=tweened(0);

    $: tweenedA.set(percentageA);
    $: tweenedB.set(percentageB);

  

    //handleVotes
    const HandleVotes=(option,id)=>{
        pollStore.update(currentPolls =>{

          
          let copied =[...currentPolls]

          let found= copied.find(copied => copied.id === id);
          
          if(option === 'a')
          {
            found.voteA ++;

          }

          if(option === 'b')
          {
            found.voteB ++;
          }

        return copied;

        })
    //   dispatch('vote',{option,id});
    }

    const deleteRecord=(id)=>{
        pollStore.update( currentPoll =>{
           let found= currentPoll.filter(element => element.id != id);
            return found;
        })
       
    }
  const editPoll=(id)=>{

        // pollStore.update(currentPoll =>{
            // let found =currentPoll.find(element => element.id === id);
            let activeItem='Add New Polls';
            // let data={act}
            dispact('changeActive',id);

            // console.log(found);
        // })
       
    }


</script>

<div class="m-4" >
  
        <div class="shadow-md border rounded-sm p-4 w-full">
            <h1 class="capitalize">{poll.Question}</h1>
            <div class="text-xs mt-2 capitalize">total votes: {totalVotes}</div>
            <div on:click={()=>HandleVotes('a',poll.id)} class="shadow-inner  my-2 w-96 p-2 relative bg-white hover:bg-gray-50">
                <div style="width:{$tweenedA}%;"
                     class="bg-blue-400 absolute h-full top-0 left-0 opacity-40"></div>
                <span class="relative w-full inline-block select-none"> {poll.AnswerA} [ {poll.voteA} ] </span>
            </div>
            <div on:click={()=>HandleVotes('b',poll.id)}  class="shadow-inner my-2 w-96 p-2 relative bg-white hover:bg-gray-50">
                <div style="width:{$tweenedB}%;"
                     class="bg-purple-400 absolute h-full  top-0 left-0 opacity-40"></div>
                <span class="relative w-full inline-block select-none">{poll.AnswerB} [ {poll.voteB} ] </span>
            </div>
            <div class="flex justify-end my-2">
                <div class="text-xs">
                    <small>Created by: {poll.FirstName} {poll.LastName}</small>
                </div>

            </div>

            <button on:click={()=> deleteRecord(poll.id)} class="border  transform bg-gray-50 focus:translate-y-1 p-1 text-sm  font-light rounded-sm">Delete</button>
            <button on:click={()=> editPoll(poll.id)} class="border  transform bg-gray-50 focus:translate-y-1 p-1 text-sm  font-light rounded-sm">edit</button>
            
        </div>    
    
       

</div>