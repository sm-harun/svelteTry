<style>
    .task-box {
        margin-top: 1rem;
        width: 100%;
        height: 100px;

        border-radius: 10px;
        box-sizing: border-box;
        position: relative;

        padding-left: 19px;
        padding-top: 1px;

        font-size: 1.2rem;

        transition: 0.2s;
    }

    .task-box:hover {
        transform: translateX(8px);
        border: 1px solid red;
    }

    .rbg {
        background-color: rgb(223, 225, 225);
    }

    .ybg {
        background-color: rgba(255, 0, 50, 0.8);
    }

    .description-container {
        padding: 0;
        margin: 0;
        position: absolute;
        bottom: 1.3rem;

        height: 40%;
        width: 90%;

        display: flex;
        align-items: flex-start;
    }

    .description {
        font-size: 0.8rem;
    }

    .time {
        position: absolute;
        top: 1rem;
        right: 10rem;
        
        font-weight: 600;
    }

    .cr {
        color: red;
    }

    .date {
        position: absolute;
        top: 1rem;
        right: 3rem;
    }

    #status {
        position: absolute;

        right: 0;
        top: 0;

        scale: 2;
        opacity: 0;
    }

    .delete-svg-container {
        width: 40px;
        height: 15px;

        right: 8px;
        bottom: 30px;
        position: absolute;
        border-radius: 1rem;
        opacity: 0;

        transition: .2s;
    }

    .delete-svg-container:hover {
        transform: scale(0.9);
    }

    .task-box:hover .delete-svg-container {
        opacity: 1;
    }

    .task-box:hover #status {
        opacity: 1;
    }
</style>

<script>
    import { fly } from 'svelte/transition'

    export let task;
    export let tasks;
    export let removeTask;

    let checkedState = false;
    let taskIndex = tasks.indexOf(task);
    
</script>

<div class='{checkedState? "ybg": "rbg"} task-box' in:fly={{ y: 600, duration: 1000 }} out:fly={{ x: -100, duration: 1000 }}>
    <h3 class="task-name">{task.taskName}</h3>

    <div class="description-container">
        <p class="description">{task.description}</p>
    </div>

    <div class="{checkedState? "time": "time cr"}">{task.time}</div>
    <div class="date">{task.date}</div>

    <input 
        type='checkbox' 
        id='status' 
        bind:checked={checkedState}
    >
    <div class='delete-svg-container' on:click={() => { removeTask(taskIndex) }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0004 9.5L17.0004 14.5M17.0004 9.5L12.0004 14.5M4.50823 13.9546L7.43966 17.7546C7.79218 18.2115 7.96843 18.44 8.18975 18.6047C8.38579 18.7505 8.6069 18.8592 8.84212 18.9253C9.10766 19 9.39623 19 9.97336 19H17.8004C18.9205 19 19.4806 19 19.9084 18.782C20.2847 18.5903 20.5907 18.2843 20.7824 17.908C21.0004 17.4802 21.0004 16.9201 21.0004 15.8V8.2C21.0004 7.0799 21.0004 6.51984 20.7824 6.09202C20.5907 5.71569 20.2847 5.40973 19.9084 5.21799C19.4806 5 18.9205 5 17.8004 5H9.97336C9.39623 5 9.10766 5 8.84212 5.07467C8.6069 5.14081 8.38579 5.2495 8.18975 5.39534C7.96843 5.55998 7.79218 5.78846 7.43966 6.24543L4.50823 10.0454C3.96863 10.7449 3.69883 11.0947 3.59505 11.4804C3.50347 11.8207 3.50347 12.1793 3.59505 12.5196C3.69883 12.9053 3.96863 13.2551 4.50823 13.9546Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
</div>