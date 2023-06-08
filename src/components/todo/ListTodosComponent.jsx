import React from "react";
export default function ListTodosComponent() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    const todos = [
        {id: 1, description: 'Learn AWS', done: false, tagetDate: targetDate},
        {id: 2, description: 'Learn Fullstack Dev', done: false, tagetDate: targetDate},
        {id: 3, description: 'Learn DevOps', done: false, tagetDate: targetDate},
    ]

    return(
        <div className="ListTodosComponent">
            <h1>Things you want to do!</h1>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr>
                </thead>
                <tbody>
                {
                    todos.map(
                        todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.tagetDate.toDateString()}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    )
}