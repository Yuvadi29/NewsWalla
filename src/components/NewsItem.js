import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
       let {title, description, image, newsurl} = this.props;
        return (
            <div className='my-4'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!image?"https://blog.sqlauthority.com/wp-content/uploads/2007/06/null-500x259.png":image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem