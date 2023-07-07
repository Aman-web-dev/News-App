import React, { ReactPropTypes } from 'react'

export default class FileName extends React.Component {




  render() {
    let { title, description, imageUrl, newsUrl, date, authorName } = this.props
    return (
      <div className="my-constainer my-3 mx-3">
        <div className="card my-2 my-3" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title + '...'}</h5>
            <p>Date-{date}</p>
            <p>{authorName}</p>
            <p className="card-text">{description + '....'}</p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm bg-dark btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}


