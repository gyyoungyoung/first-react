import React from 'react';
import './homecopy.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      q: ""
    };
    this.searchOptions = {
      limit: 10,
      page: 1,
      q: "魔法少女"
    };
  }

  async fetchData() {
    let url = new URL("https://api.jikan.moe/v3/search/anime");
    for (let key in this.searchOptions) {
      url.searchParams.set(key, this.searchOptions[key]);
    }
    let response = await fetch(url.href);

    // HTTP response code 200

    let data = await response.json();
    return data;
  }

  getData() {
    this.fetchData().then(response => {
      console.log("response", response.results);
      this.setState({
        data: response.results
      });
    });
  }

  onChange = e => {
    Object.assign(this.searchOptions, { q: e.target.value });
  };

  search = () => {
    this.getData();
  };

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.search();
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App555">
        <header onKeyDown={this.onKeyDown}>
          <input type="text" className="input-box" onChange={this.onChange} />
          <button className="button" onClick={this.search}>
            GO
          </button>
        </header>
        <section className="content">
          {data.map((item, i) => {
            return (
              <div className="item" key={i}>
                <img src={item.image_url} alt="" className="picture" />
                <p className="title">{item.title}</p>
              </div>
            );
          })}
          {data.length === 0 && (
            <p className="empty">没有内容，换个搜索条件试试！</p>
          )}
        </section>
      </div>
    );
  }
}

export default Home;
