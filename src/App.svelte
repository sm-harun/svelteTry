<style>
    .bod {
        width: 100vw;
        height: 100vh;
        
        display: flex;
        flex-direction: column;
    }
</style>

<script lang="ts">
    import TaskContainer from "./components/TaskContainer.svelte";
    import Inputs from "./components/Inputs.svelte";
    import Header from "./components/Header.svelte";

    let inputsState = false;

    $: tasksk = [
        { taskName: "Clean Room", description: "Have to finish before noon.", date: "12/05/2023", time: "12: 30"},
        { taskName: "Shower", description: "After the person comes out.", date: "30/11/2013", time: "05:30"},
    ];
    
    function changeAddMenuState(state: boolean) {
        inputsState =  state;
    }

</script>

<div class="bod">
    <Header { changeAddMenuState }/>
    
    <TaskContainer />
</div>

{#if inputsState}
    <Inputs { changeAddMenuState }/>
{/if}