<style>
    div {
        flex: 6;
        padding: 1rem;
        padding-left: 3rem;
        padding-right: 3rem;

        height: 100%;
    }
</style>

<script>
    import Task from "./Task.svelte";
    import { tasks } from "../taskStore";

    console.log($tasks)
</script>

<div>
    {#each $tasks as task, index}
        <Task {task} {index}/>
    {/each}
</div>