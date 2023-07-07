import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';


export class News extends Component {



  static defaultProps = {
    category: 'general',
    country: "in",
    pageSize: 5,

  }

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,

  }


//s

  constructor(props) {

    super(props)

    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
      document.title=`${this.props.category[0].toUpperCase()+this.props.category.slice(1)} - New/News`
  }


  async newsUpdate() {

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2406065999d1425d872babc59192b7bc&page=${this.state.page}&pagesize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })


  }

  async componentDidMount() {
    this.newsUpdate()

  }





  handleonprevious = async () => {
    this.setState({ page: this.state.page - 1 })
    this.newsUpdate();
  }



  handleonnext = async () => {



    this.setState({ page: this.state.page + 1 })
    this.newsUpdate()
  }


  render() {
    return (
      <>
        <div className="real-cont">
          <h2 className='heading'>NEW NEWS {this.props.category[0].toUpperCase()+this.props.category.slice(1)}</h2>
          {this.state.loading && <Spinner />}
          <div className='container my3'>


            {!this.state.loading && this.state.articles.map((element) => {

              return <div className="row hello">

                <div className="col-md-4" key={element.url + element.title + element.page}>
                  <Newsitem date={element.publishedAt.slice(0, element.publishedAt.indexOf('T'))} authorName={element.source.name} key={element.url + element.title} title={element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} />
                </div>

              </div>



            })}






          </div>


        </div>



        <div className="d-flex justify-content-center">

          <button disabled={this.state.page <= 1} type="button" className="btn function-btn btn-dark my-2 mx-5" onClick={this.handleonprevious}>&laquo; Previous  </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn function-btn btn-dark my-2 mx-5" onClick={this.handleonnext}> Next &raquo;</button>

        </div>


      </>


    )
  }
}

export default News



