<style>
    .bod {
        width: 100vw;
        height: 100vh;
        
        display: flex;
        flex-direction: column;
    }

    .head {
        flex: 1;

        padding: 10px;
        width: 100vw;
        text-shadow: 4px 4px purple;

        display: block;
    }

    .content {
        flex: 15;

        width: 100vw;
        
        display: flex;
    }
</style>

<script>
    import TaskContainer from "./TaskContainer.svelte";
    import Options from "./Options.svelte";
    import Inputs from "./Inputs.svelte";

    let inputsState = false;

    $: tasks = [
        { taskName: "Clean Room", date: "12/2/2022"},
        { taskName: "Shor", date: "3/5/2023"},
    ];
    
    function addTask(newTask) {
        tasks = [...tasks, newTask];
        console.log(tasks)
    }

    function changeState(state) {
        inputsState =  state;
    }

</script>

<div class="bod">
    <h1 class='head'>TODO List</h1>

    <div class='content'>
        <TaskContainer {tasks}/>
        <Options {changeState} />
    </div>
</div>

{#if inputsState}
    <Inputs {addTask} {changeState}/>
{/if}