import React, { Component } from 'react';
import Blog from '../components/Blog';

export default class BlogsContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const blogs = this.props.blogs;
    const blogEntries = blogs.map((blog, index) => <Blog key={index} blog={blog}/> );

    return (
      <div className="selected-positions">
        <h1>Selected Blogs and Workshops</h1>
        {blogEntries}
      </div>
    )
  }
}
