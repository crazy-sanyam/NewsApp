import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
           
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2306920cd072400b848397c2bbdb38b1&page=1&pageSize=9";
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }


    handlePrevClick = async () => {
        console.log("Previous page");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2306920cd072400b848397c2bbdb38b1&page=${this.state.page - 1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles 
        })
    }
    handleNextClick = async () => {

        console.log("Next Page");
        if(this.state.page + 1>Math.ceil(this.state.totalResults/9)){

        }else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2306920cd072400b848397c2bbdb38b1&page=${this.state.page + 1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })}
    }
    render() {

        return (
            <div div >
                <h1>NewsMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className=" d-flex justify-content-between container">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">

                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg> Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg></button>
                </div>
            </div>
        )


    }
}

export default News
