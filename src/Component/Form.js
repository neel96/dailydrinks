import React from "react";

export default function Form({ state, handleChange, EditItem, handleAddItem }) {
  return (
    <div>
      <form onSubmit={state.isEdit ? EditItem : handleAddItem}>
        <label htmlFor="name">Product name:</label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          value={state.name}
          name="name"
          required
        />
        <br />
        <br />
        <label htmlFor="price">Product Price:</label>
        <input
          type="text"
          id="price"
          value={state.price}
          onChange={handleChange}
          name="price"
          required
        />
        <br />
        <br />
        <label htmlFor="notes">Product Note:</label>
        <textarea
          type="text"
          id="notes"
          value={state.notes}
          onChange={handleChange}
          name="notes"
        />
        <br />
        <br />
        <span className="messageText">{state.message}</span>
        <br />
        <br />
        <input
          className="button"
          type="submit"
          value={state.isEdit ? "Update" : "Submit"}
        />
      </form>
    </div>
  );
}
