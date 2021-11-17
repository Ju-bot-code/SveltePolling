<script>
  import logo from '../assets/svelte.png'
  export let  activeItem;
  console.log(activeItem);
</script>

<header class="{activeItem === 'Add New Polls' ? 'bg-white shadow-md' : 'bg-gray-700'}">
    <ul class="flex  text-white">
        <li class="px-10 py-2">
            <div class="w-8 h-8 bg-white rounded-full">
                <img src={logo} alt="Svelte Logo" /> 
            </div>
        </li>
       
    </ul>


  
</header>
