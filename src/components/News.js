import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }


    //Fetching the news With API
    async componentDidMount() {
        console.log('cdm');
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=15408dc8c626404cb824af01710d18cc";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles,totalArticles: parsedData.totalResults })

    }

    NextClick = async () => {
        console.log("Next Button Clicked");
        if( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=15408dc8c626404cb824af01710d18cc&page=${this.state.page + 1}&pageSize=2`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.setState.page + 1,
            articles: parsedData.articles
        })
    }
    }

    PreviousClick = async () => {
        console.log("Previous Button Clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=15408dc8c626404cb824af01710d18cc&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.setState.page - 1,
            articles: parsedData.articles
        })

    }

    render() {
        console.log('render');
        return (
            <div className='container my-3'>
                <h3>Top Headlines By NewsWalla</h3>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} image={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.PreviousClick}>&#x2190; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.NextClick}>Next &#x2192;</button>
                </div>
            </div>
        )
    }
}

export default News