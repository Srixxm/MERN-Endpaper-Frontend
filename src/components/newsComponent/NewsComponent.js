import React, { Component } from 'react'
import axios from 'axios'
export class NewsComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
        newspost:[]
    }
}

componentDidMount(){
  axios.get('http://localhost:3500/api/v1/news')
  .then(response => {
      this.setState({newspost: response.data})
      console.log(response.data.newsID)

  })
  .catch(error => {
    console.log(error)
  })
}


  render() {
    const {newspost} = this.state
    return (
      <React.Fragment>
        <div className='news'>
        {newspost.length ?
         newspost.map(n => <div key ={n.newsID}><p>{n.content}</p></div>):null}
        </div>

      </React.Fragment>

    )
  }
}

export default NewsComponent