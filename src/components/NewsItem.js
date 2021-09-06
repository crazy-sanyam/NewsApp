import React, { Component } from 'react'

export class NewsItem extends Component {
// async componentDidMount(){
//     let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=2306920cd072400b848397c2bbdb38b1";
//     let data=await fetch(url);
//     let parsedData=await data.json();
//     console.log(parsedData);
//     this.setState({articles: parsedData.articles})
// }

    render() {

        let { title, description,imageUrl,newsUrl } = this.props;
        return (
            <div className="container my-3">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
