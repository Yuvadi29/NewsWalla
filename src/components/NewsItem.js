import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
       let {title, description, image, newsurl} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!image?"https://blog.sqlauthority.com/wp-content/uploads/2007/06/null-500x259.png":image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem