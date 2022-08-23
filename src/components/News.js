import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true
        }
    }


    //Fetching the news With API
    async componentDidMount(){
        console.log('cdm');
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=15408dc8c626404cb824af01710d18cc";
        let data =await fetch(url);
        let parsedData =await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})

    }

    render() {
        console.log('render');
        return (
            <div className='container my-3'>
                <h3>Top Headlines By NewsWalla</h3>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} image={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News