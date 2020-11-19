import React from 'react'
import { shortenString } from '../helpers/utils'

export default function Table({ data, handleEdit, handleDelete }) {
    return (
        <div>
            <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Notes</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((row, i) => (
                  <tr key={i}>
                    <td>{row.id}</td>
                    <td>{shortenString(row.name, 20)}</td>
                    <td>{row.price}</td>
                    <td>{row.notes ? shortenString(row.notes, 20) : '---'}</td>
                    <td>
                      <button onClick={() => handleEdit(row.id)}>
                        <i className="far fa-edit"></i>{" "}
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(row.id)}>
                        <i className="fas fa-trash-alt icon-red"></i>{" "}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No Data Found</p>
              )}
            </tbody>
          </table>
        </div>
    )
}
