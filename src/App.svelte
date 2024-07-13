<style>
    .bod {
        width: 100vw;
        height: 100vh;
        
        display: flex;
        flex-direction: column;
    }
</style>

<script>
    import TaskContainer from "./TaskContainer.svelte";
    import Inputs from "./Inputs.svelte";
    import Header from "./Header.svelte";

    let inputsState = false;

    $: tasks = [
        { taskName: "Clean Room", description: "Have to finish before noon.", date: "12/05/2023", time: "12: 30"},
        { taskName: "Shower", description: "After the person comes out.", date: "30/11/2013", time: "05:30"},
    ];
    
    function addTask(newTask) {
        tasks = [...tasks, newTask];
    }

    function removeTask(taskId) {
        tasks.splice(taskId, 1);
        tasks = [...tasks];
    }

    function changeAddMenuState(state) {
        inputsState =  state;
    }

</script>

<div class="bod">
    <Header { changeAddMenuState }/>
    
    <TaskContainer {tasks} {removeTask}/>
</div>

{#if inputsState}
    <Inputs {addTask} {changeAddMenuState}/>
{/if}