<script>
    const form={
        name:'',    //input
        age:'',  //number
        country:'', //single select drop down
        hobby:[],   //multiselect dropdown
        workSummary:'',  //text area
        remotework:false,  //single check box
        skills:[],      //multi checkbox
        years0fExperience:'' //radio

    }
</script>

<div class="m-20 grid grid-cols-2 gap-2">
    <div>
        <div>
            <label for="name">name</label>
            <br>
            <input type="text" id="name" class="border p-1" bind:value={form.name}>
        </div>
        <div>
            <label for="age">age</label>
            <br>
            <input type="number" id="age" class="border p-1" bind:value={form.age}>
        </div>

        <div class="mt-2">
            <label for="country">country</label>
            <br>
            <select type="text" id="country" class="border p-1" bind:value={form.country} >
                <option value="Japan">Japan</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
                <option value="Dubai">Dubai</option>
             </select>   
        </div>

        <div class="mt-2">
            <label for="hobby">hobby</label>
            <br>
            <div class="flex">
                <select type="text" id="hobby" class="border-l focus:outline-none focus:border-transparent focus:ring-0 p-1 border-t border-b" bind:value={form.hobby} multiple>
                    <option value="painting">painting</option>
                    <option value="singing">singing</option>
                    <option value="travelling">travelling</option>
                    <option value="coding">coding </option>
                </select>  
                <div class="w-10   pl-2">
                    <div> {#if form.hobby.find(element=>element ==='painting')}
                       <span class="text-green-400">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>

                       </span>
                       {:else}
                       <span class="text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                       </span>
                        {/if}
                    </div>
                    <div> {#if form.hobby.find(element=>element ==='singing')}
                       <span class="text-green-400">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>

                       </span>
                       {:else}
                       <span class="text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                       </span>
                        {/if}
                    </div>
                    <div> {#if form.hobby.find(element=>element ==='travelling')}
                       <span class="text-green-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>

                       </span>
                       {:else}
                       <span class="text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                       </span>
                        {/if}
                    </div>
                    <div> {#if form.hobby.find(element=>element ==='coding')}
                       <span class="text-green-400">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>

                       </span>
                       {:else}
                       <span class="text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                         </span>
                        {/if}
                    </div>
                </div> 
            </div>    
        </div>

        <div class="mt-2">
            <label for="workSummary">workSummary</label>
            <br>
            <textarea type="text" id="workSummary" class="border p-1" bind:value={form.workSummary} />
        </div>

        <div class="mt-2">
            <label for="remoteWork">remoteWork</label>
            <br>
            <input type="checkbox" id="remoteWork" class="border p-1" bind:checked={form.remotework} />
        </div>   
        
        <div class="mt-2 ">
            <h1 class="text-lg capitalize font-light underline ">skills</h1>
            <div class="grid grid-cols-2">
                <div class="mt-2">
                    <label for="html">html</label>
                    <br>
                    <input type="checkbox" id="html" 
                    value="html" bind:group={form.skills}
                    class="border p-1"/>
                </div>

                <div class="mt-2">
                    <label for="css">css</label>
                    <br>
                    <input type="checkbox" id="css" class="border p-1"
                    value="css" bind:group={form.skills} />
                </div>

                <div class="mt-2">
                    <label for="javaScript">javaScript</label>
                    <br>
                    <input type="checkbox" id="javaScript" class="border p-1" 
                    value="javaScript" bind:group={form.skills} />
                </div>
            </div>
        </div> 
        <div class="mt-2 ">
            <h1 class="text-lg capitalize font-light underline ">Years of experience</h1>
            <div class="grid grid-cols-3">
                <div class="mt-2">
                    <label for="1-2">1-2</label>
                    <br>
                    <input type="radio" id="1-2" 
                    value="1-2" bind:group={form.years0fExperience}
                    class="border p-1"/>
                </div>

                <div class="mt-2">
                    <label for="3-5">3-5</label>
                    <br>
                    <input type="radio" id="3-5" class="border p-1"
                    value="3-5" bind:group={form.years0fExperience} />
                </div>

                <div class="mt-2">
                    <label for="6-10">6-10</label>
                    <br>
                    <input type="radio" id="6-10" class="border p-1" 
                    value="6-10" bind:group={form.years0fExperience} />
                </div>
            </div>
        </div>

    </div>

 
   
    <div>
        <!-- <pre>{JSON.stringify(form)}</pre>  -->
       <span class="word-break"> {JSON.stringify(form)}</span>
    </div>
  
</div>
