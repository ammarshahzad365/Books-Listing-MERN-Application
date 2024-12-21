import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class CreateBook extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
    this.onChangeBookISBN = this.onChangeBookISBN.bind(this);
    this.onChangeBookPageCount = this.onChangeBookPageCount.bind(this);
    this.onChangeBookShortDescription = this.onChangeBookShortDescription.bind(this);
    this.onChangeBookAuthors = this.onChangeBookAuthors.bind(this);
    this.onChangeBookCategories = this.onChangeBookCategories.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: '',
      isbn: '',
      pageCount: '',
      shortDescription: '',
      authors: [],
      categories: []
    }
    
    CreateBook.propTypes = {
      history: PropTypes.object.isRequired
    };
    }
  

  onChangeBookTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeBookISBN(e) {
    this.setState({ isbn: e.target.value })
  }

  onChangeBookPageCount(e) {
    this.setState({ pageCount: e.target.value })
  }

  onChangeBookShortDescription(e) {
    this.setState({ shortDescription: e.target.value })
  }

  onChangeBookAuthors(e) {
    this.setState({ authors: e.target.value })
  }

  onChangeBookCategories(e) {
    this.setState({ categories: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const bookObject = {
      title: this.state.title,
      isbn: this.state.isbn,
      pageCount: this.state.pageCount,
      shortDescription: this.state.shortDescription,
      authors: this.state.authors,
      categories: this.state.categories
    };
    axios.post('http://localhost:4000/books/create-book', bookObject)
      .then(res => console.log(res.data));

    this.setState({ title: '', isbn: '', pageCount: '', shortDescription: '', authors: [], categories: [] });

    // Redirect to Books List 
    this.props.history.push('/book-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeBookTitle} />
        </Form.Group>

        <Form.Group controlId="ISBN">
          <Form.Label>ISBN</Form.Label>
          <Form.Control type="text" value={this.state.isbn} onChange={this.onChangeBookISBN} />
        </Form.Group>

        <Form.Group controlId="pgCount">
          <Form.Label>Page Count</Form.Label>
          <Form.Control type="number" value={this.state.pageCount} onChange={this.onChangeBookPageCount} />
        </Form.Group>

        <Form.Group controlId="shortDescription">
          <Form.Label>Short Description</Form.Label>
          <Form.Control type="text" value={this.state.shortDescription} onChange={this.onChangeBookShortDescription} />
        </Form.Group>

        <Form.Group controlId="authors">
          <Form.Label>Authors</Form.Label>
          <Form.Control type="text" value={this.state.authors} onChange={this.onChangeBookAuthors} />
        </Form.Group>

        <Form.Group controlId="categories">
          <Form.Label>Categories</Form.Label>
          <Form.Control type="text" value={this.state.categories} onChange={this.onChangeBookCategories} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Book
        </Button>
      </Form>
    </div>);
  }
}