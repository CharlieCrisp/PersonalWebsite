import React, { Component, PropTypes } from 'react';

export default class Blog extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  render() {
    const blog = this.props.blog;
    const blogId = 'position-info-' + blog.title.replace(/\s/g, '');

    let onExpandClick = () => {
      let body = document.getElementById(blogId);
      switch (this.state.open) {
         case true:
           body.style.display = 'none';
           this.setState({
             open: false
           });
           return;
         case false:
           body.style.display = 'inline';
           this.setState({
             open: true
           });
           return;
       }
    };

    return (
      <div className="position-container">
        <div className="image-container" >
          <div className="screenshot-container">
            <img src={blog.image}/>
          </div>
        </div>
        <div className="position-info-container">
          <div className="position-info-main">
            <div onClick={onExpandClick} style={{'cursor': 'pointer','display': 'flex', 'flexDirection': 'row', 'alignItems':'center'}}>
              <h2>{blog.title}</h2>
              <h2 style={{'marginLeft':'auto'}}><i className={this.state.open ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true"></i></h2>
            </div>
            <div>{blog.date}</div>
            <a href={blog.url}><i className="fa fa-link" aria-hidden="true"></i> Webpage</a>
          </div>
          <div className='position-info-body' id={blogId}>
            <h3>Description</h3>
            <div>{blog.description}</div>
            {(blog.links.length != 0) ? <div><h3>Links</h3>
            <ul>
            {Object.entries(blog.links).map(([key,value]) => <li><a href={value}>{key}</a></li>)}</ul></div> : null}
          </div>
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
};
