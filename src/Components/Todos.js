import React, { Component } from "react";
class Todos extends Component {
    constructor() {
        super();
        this.state = {
            task: "",
            todos: []
        }
    }
    handleChange = (event) => {
        this.setState({
            task: event.target.value
        });
    };
    addTodo = () => {
        if (this.state.task.trim() === "") {
            alert("Please enter a task!")
            return;
        }
        const newTodo = { text: this.state.task.trim(), completed: false }
        this.setState((prevSate) => ({
            todos: [...prevSate.todos, newTodo],
            task: ""
        }));
        alert("Task added successfully!");
    };
    toggleComplete = (index) => {
        const todos = [...this.state.todos];
        todos[index].completed = !todos[index].completed;
        this.setState({ todos });
    };
    render() {
        const styles = {
            container: {
                textAlign: "center",
                marginTop: "50px",
                fontFamily: "Arial, sans-serif",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
            },
            title: {
                color: "purple"
            },
            input: {
                padding: "8px",
                marginRight: "5px"
            },
            button: {
                padding: "8px 12px",
                backgroundColor: "purple",
                color: "white",
                border: "none",
                cursor: "pointer"
            },
            list: {
                marginTop: "20px",
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
                width: "fit-content",
            },
            listItem: {
                marginBottom: "10px",
                display: "flex",
                alignItems: "center"
            }
        }
        return (

            <div style={styles.container}>
                <h1 style={styles.title}>📝 My To-Do App</h1>
                {/* Input + Button */}
                <div>
                    <input type="text" value={this.state.task} onChange={this.handleChange} placeholder="Enter a Task..." style={styles.input} />
                    <button onClick={this.addTodo} style={styles.button}>Add</button>
                </div>
                {/* Todo List */}
                <div>
                    <ol style={styles.list}>
                        {this.state.todos.map((todo, index) => (
                            <li key={index} style={styles.listItem}>
                                <input type="checkbox" checked={todo.completed} onChange={() => this.toggleComplete(index)} />
                                <span style={{ marginLeft: "8px", textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }

}; export default Todos