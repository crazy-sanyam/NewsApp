import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "le-monde",
                "name": "Le Monde"
            },
            "author": "Isabelle Barth",
            "title": "Salariat : « C’est maintenant le contrat psychologique qui prévaut dans la relation professionnelle »",
            "description": "Depuis l’épidémie de Covid-19, les aspirations des salariés ont fortement changé, et celles-ci ne se limitent pas au télétravail, observe la professeure en sciences du management Isabelle Barth, dans une tribune au « Monde ».",
            "url": "https://www.lemonde.fr/emploi/article/2021/09/04/salariat-c-est-maintenant-le-contrat-psychologique-qui-prevaut-dans-la-relation-professionnelle_6093373_1698637.html",
            "urlToImage": "https://img.lemde.fr/2021/09/02/395/0/5031/2510/1440/720/60/0/cbc7630_913406740-pns-6442811.jpg",
            "publishedAt": "2021-09-04T04:00:13Z",
            "content": "Tribune. La rentrée professionnelle samorce et, déjà, il est clair que plus rien ne sera comme avant la pandémie due au Covid-19. Un constat est que le « contrat psychologique » devient le nouveau mo… [+2749 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "The Irish Times",
            "title": "Colleges expect spike in random selection",
            "description": "High-points courses in health, law, pharmacy and science most likely to be affected",
            "url": "https://www.irishtimes.com/news/education/colleges-expect-spike-in-random-selection-1.4664521",
            "urlToImage": "https://www.irishtimes.com/polopoly_fs/1.4255429.1589638038!/image/image.png",
            "publishedAt": "2021-09-04T02:45:47Z",
            "content": "Universities fear they will have to restrict entry to more high-points courses on the basis of random selection this year due to record-breaking Leaving Cert results.\r\nResults this year climbed to a … [+2299 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "The Irish Times",
            "title": "Colleges expect spike in random selection",
            "description": "High-points courses in health, law, pharmacy and science most likely to be affected",
            "url": "https://www.irishtimes.com/\t\t\t\t\t\t\t/news/education/colleges-expect-spike-in-random-selection-1.4664521\t",
            "urlToImage": "https://www.irishtimes.com/polopoly_fs/1.4255429.1589638038!/image/image.png",
            "publishedAt": "2021-09-04T02:45:47Z",
            "content": "Universities fear they will have to restrict entry to more high-points courses on the basis of random selection this year due to record-breaking Leaving Cert results.\r\nResults this year climbed to a … [+2299 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Lisa Richwine",
            "title": "Critics say 'Dune' movie will thrill ardent fans, may mystify others",
            "description": "The much-anticipated movie remake of science-fiction epic \"Dune\" won praise from critics on Friday for its stunning visual spectacle, though some of the initial reviews said that only the most hard-core fans would enjoy the storytelling.",
            "url": "https://www.reuters.com/lifestyle/critics-say-dune-movie-will-thrill-ardent-fans-may-mystify-others-2021-09-03/",
            "urlToImage": "https://www.reuters.com/resizer/vbQuQFvG4empoTct_VeX4ws_Jyc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MU2SAYNLPZKAVDSNYEREZS5VME.jpg",
            "publishedAt": "2021-09-04T01:05:08Z",
            "content": "LOS ANGELES, Sept 3 (Reuters) - The much-anticipated movie remake of science-fiction epic \"Dune\" won praise from critics on Friday for its stunning visual spectacle, though some of the initial review… [+2088 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Wired",
            "title": "Richard Lewontin Leaves a Legacy of Fighting Racism in Science",
            "description": "The late evolutionary biologist made a reputation—and enemies—by speaking out against the idea that genes are destiny. Science still needs people like him.",
            "url": "https://www.wired.com/story/richard-lewontin-leaves-a-legacy-of-fighting-racism-in-science/",
            "urlToImage": "https://media.wired.com/photos/61313c7367c92793abf3b248/191:100/w_1280,c_limit/Science_Lewontin.jpg",
            "publishedAt": "2021-09-03T12:00:00Z",
            "content": "When Donald Trump invoked genetics at a campaign rally in Minnesota in September 2020, commentators were quick to connect his language to the eugenics and Nazi science of the early 20th century. You … [+4259 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Anjani Jain, Jeffrey Sonnenfeld",
            "title": "A tale of two governors: COVID outcomes in Florida and Connecticut show that leadership matters",
            "description": "Florida's spiking hospitalization and COVID death rates show what happens when ideology trumps science on mask mandates and vaccinations.",
            "url": "https://fortune.com/2021/08/31/covid-florida-connecticut-mask-mandates-vaccination-hospitalization-death-rates/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2021/08/Commentary-Tale-of-2-Governors-DeSantis-Lamont.jpg?resize=1200,600",
            "publishedAt": "2021-08-31T21:00:00Z",
            "content": "Skip to Content"
        },
        {
            "source": {
                "id": "national-geographic",
                "name": "National Geographic"
            },
            "author": "Nadia Drake",
            "title": "How these feuding map-makers shaped our fascination with Mars",
            "description": "One was an artist who loved space. His rival was a bold professional astronomer. Their race to map the red planet sparked decades of science and speculation.",
            "url": "https://www.nationalgeographic.com/science/2021/02/how-feuding-map-makers-shaped-our-fascination-with-mars.html",
            "urlToImage": "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
            "publishedAt": "2021-02-17T14:37:21.3706142Z",
            "content": null
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=2306920cd072400b848397c2bbdb38b1";
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
    render() {

        return (
            <div div >
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,70):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
            </div>
        )


    }
}

export default News
