<style>
    .form-container {
        padding: 2rem;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #ccc;
        background-color: rgba(255, 0, 0, 0.8);
        box-sizing: border-box;

        display: flex;
        align-items: flex-start;
    }

    form {
        flex: 1;
        height: 100%;
    }

    label {
        font-weight: 400;
    }

    input {
        padding: 4px;
        border: 2px solid black;
        border-radius: 4rem;
    }

    button {
        height: 3rem;
        width: 6rem;

        border: 3px solid black;
        border-radius: 9px;
        font-family:'Courier New', Courier, monospace;
        font-weight: 800;
        background-color: yellow;

        transition: .3s;
    }

    button:hover {
        border-color: white;
        background-color: black;
        color: white;
    }

    p {
        flex: 1;

        color: yellow;
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
    export let addTask;
    export let changeState;

    let titleValue = '';
    let dateValue = '';

    let warning = false;

    function handleEvents() {

         if (titleValue.trim() === '' || dateValue.trim() === '') {
            warning = true;
            return;
        }

        addTask({ taskName: titleValue, date: dateValue});
        changeState(false);
    }
</script>

<div class='form-container'>
    <form on:submit|preventDefault={handleEvents}>
        <label for="Title">Title : </label>
        <input 
            type='text' 
            name='title' 
            id='title'
            bind:value={titleValue}
        ><br><br>

        <label for="Date">Date : </label>
        <input 
            type='text' 
            name='date'
            id='date'
            bind:value={dateValue}
        ><br><br>

        <button type="submit">ADD Task</button>
    </form>

    {#if warning}
        <p>Please Fill Out Form Before Submitting</p>
    {/if}

    <div class='svg-container' on:click={() => { changeState() }}>
        <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel</title> <path d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"></path> </g></svg>
    </div>
</div>