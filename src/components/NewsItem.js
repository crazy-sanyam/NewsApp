import React, { Component } from 'react'
// import imgNews from './imgNews.jpg'

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="container my-4 mx-2">
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>

                        <span className=" badge rounded-pill bg-danger" >
                            {source}
                            {/* <span className="visually-hidden">unread messages</span> */}
                        </span>
                    </div>
                    <img src={!imageUrl ? "https://www.sify.com/images/news-183x123.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
