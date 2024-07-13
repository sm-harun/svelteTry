<style>
    .form-container {
        padding: 2rem;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #ccc;
        background-image: linear-gradient(to bottom,  white, rgb(150, 150, 150));
        border-radius: 2rem 2rem 0 0;
        box-sizing: border-box;

        display: flex;
        align-items: flex-start;
    }

    form {
        flex: 1;
        height: 100%;
    }

    label {
        font-weight: 800;
    }

    input {
        padding: 4px;
        border: 2px solid black;
        border-radius: 4rem;
    }
    
    textarea {
        padding: 8px;
        border-radius: 1rem;

        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    button {
        height: 3rem;
        width: 6rem;

        border: 1.5px solid black;
        border-radius: 9px;
        font-family:'Courier New', Courier, monospace;
        font-weight: 800;
        background-color: red;

        transition: .3s;
    }

    button:hover {
        transform: scale(0.94);
        background-color: black;
        color: white;
    }

    p {
        flex: 1;

        color: rgb(255, 57, 57);
        font-weight: 800;
    }

    svg {
        box-sizing: border-box;
    }

    .svg-container {
        position: absolute;
        top: 10px;
        right: 10px;

        width: 40px;
        height: 40px;

        transition: .2s;
    }

    .svg-container:hover {
        transform: scale(.95);
    }
</style>

<script>
    import { fly } from 'svelte/transition'

    export let addTask;
    export let changeAddMenuState;

    let titleValue = '';
    let descriptionValue = '';

    let warning = false;

    function handleEvents() {

         if (titleValue.trim() === '' || descriptionValue.trim() === '') {
            warning = true;
            return;
        }

        function format(value) {
            if (parseInt(value) < 10) {
                return "0" + value;
            }
            return value;
        }
        
        const currentDate = new Date();

        let dateValue = `${format(currentDate.getDate())}/${format(currentDate.getMonth())}/${format(currentDate.getFullYear())}`; 
        let timeValue = `${format(currentDate.getHours())}: ${format(currentDate.getMinutes())}`;

        addTask({ taskName: titleValue, description: descriptionValue, date: dateValue, time: timeValue});
        changeAddMenuState(false);
    }
</script>

<div class='form-container' in:fly={{ y: 100 }} out:fly={{ y: 100 }}>
    <form on:submit|preventDefault={handleEvents}>
        <label for="Title">Title : </label>
        <input 
            type='text' 
            name='title' 
            id='title'
            bind:value={titleValue}
        ><br><br>

        <label for="description">Description : </label>

        <textarea 
            id="description" 
            name="description" 
            rows="4" 
            cols="30"
            bind:value={descriptionValue}
            ></textarea><br><br>

        <button type="submit">ADD Task</button>
    </form>

    {#if warning}
        <p>Please Fill Out the Form Before Submitting</p>
    {/if}

    <div class='svg-container' on:click={() => { changeAddMenuState() }}>
        <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel</title> <path d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"></path> </g></svg>
    </div>
</div>