<script>
    import Button from '../lib/Button.svelte' 
    import pollStore from '../stores/pollStore';
    import {createEventDispatcher} from 'svelte';
    import { element, exclude_internal_props } from 'svelte/internal';

    let newPoll={ FirstName:'',LastName:'',Question:'',AnswerA:'',AnswerB:'' ,id:''};
    let errors={ FirstName:'',LastName:'',Question:'',AnswerA:'',AnswerB:'' };
    let valid= true;
    export  let  idEdit;
    let editForm =false;
    if(idEdit){
        editForm=true;
    }

    const dispatch=createEventDispatcher();
    const secondDispatch=createEventDispatcher();
    
    const addPoll=()=>{

        //check Frist Name
        
        if(newPoll.FirstName.trim().length < 2 ){
            valid=false;
            errors.FirstName='First Name cannot be less than 5 characters long';
        }else{
            let valid= true;
           errors.FirstName='';
        }
        //Check last name
        if(newPoll.LastName.trim().length < 2){
            valid =false;
            errors.LastName='Last name cannot be less than 5 characters long';
        }else{
            let valid= true;
            errors.LastName='';
        }

        //check for Questions
        if(newPoll.Question.trim().length < 10){
            valid=false;
            errors.Question='Question cannot be less than 10 characters long';
        }else{
            let valid= true;
            errors.Question='';
        }

        //check for answer A
        if(newPoll.AnswerA.trim().length < 1)
        {
            valid=false;
            errors.AnswerA='Ansewer A is required';
        }else{
            let valid= true;
            errors.AnswerA='';
        }

        //check for answer B

        if(newPoll.AnswerB.trim().length < 1)
        {
            valid=false;
            errors.AnswerB='Answer B is required';
        }else{
            let valid= true;
            errors.AnswerB='';
        }

      

        if(valid && !editForm){
            let record={...newPoll ,voteA:0 ,voteB:0 ,id:Math.random()};
            // update the list with pollstore
            pollStore.update(currentPolls =>{
                return [record, ... currentPolls];
            })

        }
        dispatch('createPoll');
       

    }

    if(idEdit){
        
        pollStore.update(currentPolls =>{
            let coiped=[...currentPolls];
            let found = coiped.find(element => element.id === idEdit);
            let findVotes =currentPolls.find(element => element.id === idEdit);
            newPoll={...found,voteA:findVotes.voteA ,voteB:findVotes.voteB};
          
            if(valid){
            let updated=coiped.filter(element => element.id != idEdit);
       
            return [newPoll,...updated];
                }
           
         })
        
    };

 
    
   
</script>
<div  class="mx-auto  max-w-full bg-gradient-to-r p-32 from-green-500  to-blue-400  ">
        <div class="bg-gradient-to-r mx-32  py-14  from-green-400  to-blue-500 shadow-2xl rounded-bl-3xl rounded-tr-3xl  ">
                <h1 class="text-white text-2xl uppercase font-light tracking-wider font text-center">Add a poll</h1>
                <div class="max-w-xl mx-auto p-10 blur-3xl ">
                    <div class="p-10   rounded-bl-2xl rounded-tr-2xl border-2 border-white rounded-sm">
                        <form on:submit|preventDefault={addPoll}>
                            
                            <div>
                            <label class="text-white font-light uppercase text-sm my-2" for="FirstName">First Name</label>
                            <input class="rounded-sm shadow-2xl border h-8 mb-4 px-3 w-full block " type="text" id="FirstName" bind:value={newPoll.FirstName}>
                            <div class="mt-2 text-red-200 font-bold">{errors.FirstName}</div>
                            </div>

                            <div>
                            <label class="text-white font-light uppercase text-sm my-2" for="LastName">Last Name</label>
                            <input class="rounded-sm shadow-2xl border h-8 mb-4 px-3 w-full block " type="text" id="LastName" bind:value={newPoll.LastName}>
                            <div class="mt-2 text-red-200 font-bold">{errors.LastName}</div>
                            </div>

                            <div>
                            <label class="text-white font-light uppercase text-sm my-2" for="Question">Question:</label>
                            <input class="rounded-sm shadow-2xl border h-8 mb-4 px-3 w-full block " type="text" id="Question" bind:value={newPoll.Question}>
                            <div class="mt-2 text-red-200 font-bold">{errors.Question}</div>
                            </div>

                            <div>
                            <label class="text-white font-light uppercase text-sm my-2" for="AnswerA">AnswerA:</label>
                            <input class="rounded-sm shadow-2xl border h-8 mb-4 px-3 w-full block " type="text" id="AnswerA" bind:value={newPoll.AnswerA}>
                            <div class="my-2 text-red-200 font-bold">{errors.AnswerA}</div>
                            </div>

                            <div>
                            <label class="text-white font-light uppercase text-sm my-2" for="AnsewerB">AnsewerB:</label>
                            <input class="rounded-sm shadow-2xl border h-8 mb-4 px-3 w-full block " type="text" id="AnsewerB" bind:value={newPoll.AnswerB}>
                            <div class="mt-2 text-red-200 font-bold my-2">{errors.AnswerB}</div>
                            </div>

                            
                            <button  class="glass transform rounded-md focus:ring-1 focus:ring-white w-full hover:translate-y-1 border  shadow-2xl hover:bg-white bg-gray-50  p-2 ">Submit</button>
                            <!-- <Button styles='secondary'  >
                              Submit
                            </Button> -->
                            </form>
                    </div>         
                </div>
        </div>  
</div>             