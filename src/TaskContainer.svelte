<style>
    div {
        flex: 4;
        padding: 1rem;

        height: 100%;
    }
</style>

<script>
    import Task from "./Task.svelte";

    export let tasks;
    export let removeTask;
</script>

<div>
    {#each tasks as task}
        <Task {task} {tasks} {removeTask}/>
    {/each}
</div>