import { writable } from "svelte/store";

const pollStore =writable(
    [{
        id:1,
        FirstName:'lisa',
        LastName:'den',
        Question:'How are you today',
        AnswerA:'good',
        AnswerB:'not good',
        voteA:5,
        voteB:9
      }
     ]
); 


 export default pollStore;