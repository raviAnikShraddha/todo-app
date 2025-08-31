import React, { Component } from "react";
class TestDemo extends Component {
    constructor() {
        super();
        this.state = {
            task: "",
            Items: []
        }
    }
    handleChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }
    addItem = () => {
        this.setState((prevState) => ({
            Items: [...prevState.Items, this.state.task],
            task: ""
        }));
    }
    render() {
        const styles = {
            container: {
                textAlign: "center",
                marginTop: "50px",
                fontFamily: "Arial, sans-serif"
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
                padding: 0
            },
            listItem: {
                marginBottom: "10px"
            }
        }
        return (
            <div style={styles.container}>
                <input type="text" style={styles.input} value={this.state.task} onChange={this.handleChange} placeholder="Enter the task" />
                <button onClick={this.addItem} style={styles.button}>Add</button>
                <div>
                    {/* <h1>{this.state.task}</h1> */}
                    <ul style={styles.list}>
                        {this.state.Items.map((item, index) =>
                            <li key={index} style={styles.listItem}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
} export default TestDemo