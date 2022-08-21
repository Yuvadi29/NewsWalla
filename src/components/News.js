import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h3>Top Headlines By NewsWalla</h3>
                <div className="row">
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="Mydesc" image="urlToImage"/>
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="Mydesc" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="Mydesc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News