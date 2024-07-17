import { writable  } from "svelte/store";

export type Task = {
    taskName: string,
    description: string,
    date: string,
    time: string,
}

export const tasks = writable([
    { taskName: "Clean Room", description: "Have to finish before noon.", date: "12/05/2023", time: "12: 30"},
    { taskName: "Shower", description: "After the person comes out.", date: "30/11/2013", time: "05: 30"},
    { taskName: "Laundary", description: "Have a few clothes left.", date: "31/10/2013", time: "07: 30"},
]);

export const removeTask = (index: number) => {
    tasks.update((tasks) => {
        tasks.splice(index, 1) 
        return tasks;
    });
}

export const addTask = (task: Task) => {
    tasks.update((tasks) => {
        tasks.push(task);
        return tasks; 
    });
}