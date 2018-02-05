import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDpaWkQ_euV7LJz9LR3LWOOW2ElP0mFBYQ';

class App extends React.Component {
  getSearch(term) {
    YTSearch({key: API_KEY, term: "ma long"}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
      console.log(videos);
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.getSearch("ma long")
  }

  render() {
    return (
      <div>
        <SearchBar onVideoSearch={term => {this.getSearch(term)}} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => {
            this.setState({selectedVideo})}}
          videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
