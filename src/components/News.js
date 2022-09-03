import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `NewsWalla | ${capitalFirstLetter(props.category)}`;


    const capitalFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    
    const UpdateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15408dc8c626404cb824af01710d18cc&page=${page}&pageSize=${props.pageSize}`;
        setloading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setloading(false)
    }

    useEffect(() => {
        UpdateNews();
    }, [])

    // eslint-disable-next-line
    const PreviousClick = async () => {
        setPage(page - 1)
        UpdateNews();
    }

    // eslint-disable-next-line
    const NextClick = async () => {
        setPage(page + 1)
        UpdateNews();
        
    }

    const fetchMoreData = async () => {
        //A fake async api call which sends 20 more records in 1.5sec
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15408dc8c626404cb824af01710d18cc&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1 )
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>

            <h3 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Top {capitalFirstLetter(props.category)} News By NewsWalla</h3>
            <hr />
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} image={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News;