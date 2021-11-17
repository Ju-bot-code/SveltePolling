<script>
    let menu=['Sign in', 'Profile','Register','Notifications'];

    let menuOpen=false;
    let signIn=false;

    const showMenu=()=>{
        menuOpen= !menuOpen;
    }
    const secondPopUp=(item)=>{
        if(item === 'Sign in'){
            console.log(item);
            menuOpen=false;
            signIn=true;
        }
    }
    const closeSecondPopUp=()=>{
        signIn=!signIn;
    }
</script>

<div class="bg-gray-600  w-full p-3">
    <div on:click={showMenu} class="flex relative justify-end w-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
    </div>
    
</div>
    {#if menuOpen}
    <div class="absolute z-10 top-32 right-2 w-40 bg-white shadow-lg border rounded-lg">
        <ul class="divide-y divide-gray-100">
            {#each menu as  item}
            <li on:click={()=>secondPopUp(item)} class="py-2 w-full text-center hover:shadow hover:border rounded-md focus:shadow-2xl ">
                {item}
            </li>
            {/each}
        </ul>
    </div>
    {/if}

    {#if signIn}
    <div class="w-screen h-screen flixed inset-0 ">
        <div  class="bg-gray-800 fixed inset-0  bg-opacity-70 w-full h-full"></div>
        <div on:click|self={closeSecondPopUp} class=" fixed inset-0 w-max-md  ">
           
            <div class="bg-white w-1/2 relative space-y-8 rounded-md shadow-lg p-8 mx-auto my-20">
                
                <div class=" absolute top-4 w-full -left-6 flex z-10 justify-end">
                    <button on:click={closeSecondPopUp} class="btn btn-circle btn-xs md:btn-sm ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current md:w-6 md:h-6">   
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
                        </svg>
                    </button>
                </div>
                <h1 class="text-4xl font-light text-center">Sign In Form</h1>

                <div class="">
                    <label for="FirstName">First Name</label>
                    <input id="FirstName" type="text" class=" px-3 w-full h-10 rounded-md  border">
                </div>   
                
                <div>
                    <label for="LastName">Last Name</label>
                    <input id="LastName" type="text" class="w-full px-3 h-10 rounded-md border">
                </div> 

                <div>
                    <button class="btn text-white w-full rounded-sm  font-light">Sign In</button> 

                </div>
            </div>    

        </div>

    </div>
    
    {/if}

<style>
    *{
    caret-color: red;
    }
</style>    