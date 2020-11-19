import React, { Component } from "react";
import Form from "../Component/Form";
import Table from "../Component/Table";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      notes: "",
      message: "",
      isEdit: false,
      editItem: "",
      data: [
        {
          id: "1",
          name: "Order 1",
          price: 12,
          notes:
            "test 1233 test 1233test 1233test 1233test 1233test 1233test 1233test 1233",
        },
        { name: "Order 2", id: "2", price: 21, notes: "test 1233" },
      ],
    };
  }

  onChangeValue = (event) => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    // not allowed AND not working
    this.setState((state) => {
      const list = state.list.push(state.value);

      return {
        list,
        value: "",
      };
    });
  };

  handleEdit = (id) => {
    const { data } = this.state;
    const editData = data.find((obj) => obj.id === id);
    this.setState({
      isEdit: true,
      editItem: id,
      name: editData.name,
      price: editData.price,
      notes: editData.notes,
    });
  };

  handleDelete = (id) => {
    const { data } = this.state;
    const index = data.findIndex((obj) => obj.id === id);
    if (index > -1) {
      data.splice(index, 1);
      this.setState({ data });
    }
  };

  handleVisible = () => {
    this.setState({
      isVisible: true,
    });
  };

  handleAddItem = (e) => {
    e.preventDefault();
    const { data, name, price, notes } = this.state;
    var newArray = [...data];
    const newData = {
      id: data.length + 1,
      name,
      price,
      notes,
    };
    newArray.push(newData);
    this.setState(
      {
        data: newArray,
        message: "Item Added Successfuly",
      },
      () => {
        setTimeout(() => {
          this.setState({
            isVisible: false,
            name: "",
            price: "",
            notes: "",
            message: "",
          });
        }, 1000);
      }
    );
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  EditItem = (e) => {
    e.preventDefault();
    const { data, editItem, name, price, notes } = this.state;
    const index = data.findIndex((obj) => obj.id === editItem);
    let newArray = [...data];
    newArray[index] = { ...newArray[index], name, price, notes };
    this.setState(
      {
        data: newArray,
        message: "Item Successfully Updated",
      },
      () => {
        setTimeout(() => {
          this.setState({
            isEdit: false,
            isVisible: false,
            name: "",
            price: "",
            notes: "",
            message: "",
          });
        }, 1000);
      }
    );
  };

  render() {
    const { isVisible, data, isEdit } = this.state;
    return (
      <div className="App">
        <button className="button button1" onClick={this.handleVisible}>
          Add Order
        </button>
        <div>
          <Table
            data={data}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
          <br />
          <br />
          {(isVisible || isEdit) && (
            <Form
              state={this.state}
              handleChange={this.handleChange}
              EditItem={this.EditItem}
              handleAddItem={this.handleAddItem}
            />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
