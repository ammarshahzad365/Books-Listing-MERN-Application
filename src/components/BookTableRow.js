import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class BookTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteBook = this.deleteBook.bind(this)
  }

  deleteBook() {
    axios
      .delete(
        'http://localhost:4000/books/delete-book/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Book successfully deleted!')
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  
  render() {
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.isbn}</td>
        <td>{this.props.obj.pageCount}</td>
        <td>{this.props.obj.shortDescription}</td>
        <td>{this.props.obj.authors}</td> 
        <td>{this.props.obj.categories}</td>
  
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-book/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteBook} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
