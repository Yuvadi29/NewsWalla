import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
       let {title, description, image, newsurl, author, date, source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!image?"https://blog.sqlauthority.com/wp-content/uploads/2007/06/null-500x259.png":image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="sourcename">{source}</h4>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown" :author} on {new Date(date).toGMTString()}</small></p>
                            <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem