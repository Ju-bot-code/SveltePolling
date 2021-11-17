  <script>

    import Header from './lib/Header.svelte'
    import Footer from './lib/Footer.svelte'
    import Tabs from './components/tabs.svelte'
    import Show from './components/show.svelte'
    import DoublePopUp from './components/DoublePopUp.svelte'
    import ButtonTabs from './components/buttonTabs.svelte'
    import AddNewPolls from './components/AddNewPolls.svelte'
    import PollList from './components/PollList.svelte'
    import Forms from './components/forms.svelte'
    import ApiStuff from './components/apiStuff.svelte'
  
  

    let items =['Current Polls','Add New Polls','Double Pop ups','Show','forms','Button tabs','apiStuff'];
    
    let activeItem='Current Polls';
    
    const makeActive=(e)=>{
      activeItem=e.detail;
     }

     let polls;
    //  [{
    //    id:1,
    //    FirstName:'lisa',
    //    LastName:'den',
    //    Question:'How are you today',
    //    AnswerA:'good',
    //    AnswerB:'not good',
    //    voteA:5,
    //    voteB:9
    //  }
    // ];  

     const createPoll=()=>{
       activeItem='Current Polls';
        // polls =[e.detail,...polls]; inistal stuff
   
     }
     const again=()=>{
       activeItem='Current Polls';
       console.log('hi');
        // polls =[e.detail,...polls]; inistal stuff
   
     }

     const voteCount=(e) =>{
      
          // let clickPoll =e.detail;
          // let copied =[...polls]

          // let found= copied.find(copied => copied.id === clickPoll.id);
          
          // if(clickPoll.option === 'a')
          // {
          //   found.voteA ++;

          // }

          // if(clickPoll.option === 'b')
          // {
          //   found.voteB ++;
          // }

    

          // polls=copied;

     }
     let idEdit

   
     const editChangeActive=(e)=>{
      activeItem='Add New Polls';
      idEdit = e.detail;
    
     }
  
   

  </script>

  <div class="fixed z-50 top-0 w-full">
    <Header {activeItem}/>
  </div>

  <main class="py-12 ">
 
  

    <!-- vertical tabs  -->
    <Tabs on:makeActive={makeActive} {items} {activeItem} />

    <div >
      {#if activeItem === 'Current Polls'}
       
        <!-- <p class="card-body">Current Polls</p> -->
        <PollList on:changeActive={editChangeActive} />
      
      {:else if activeItem === 'Add New Polls'}
       
           
            <AddNewPolls on:createPoll={createPoll} {idEdit} on:again={again} />
      
      {:else if activeItem === 'Double Pop ups'}

        <!-- double pop ups  -->
       <DoublePopUp />
      
      {:else if activeItem === 'Show'}

        <!--open close tabs  -->
        <Show/>
      
      {:else if activeItem === 'forms'}
       
        <Forms />
        
      {:else if activeItem === 'Button tabs'}
       
        <ButtonTabs/>   
      
      {:else if activeItem === 'apiStuff'}
       
        <ApiStuff/>   
      
    {/if}
  </div>
    
    
 </main>

  <Footer />


  <style>
    
  </style>
