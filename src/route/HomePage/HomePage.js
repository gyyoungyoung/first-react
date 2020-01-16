import React from 'react';

import logo from '../../logo.svg';

import './HomePage.scss';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      storyList: [
        {
          imgUrl: 'http://static.tasaid.com/articles/94f45405c272ebd6f953eee707d00e98.jpeg',
          text: `无论我们如何努力\n在逆流中我们总是抓不住那些那些重要的东西\n即便我们一次次复盘然\n而却再也无法回头`
        },
        {
          imgUrl: 'http://static.tasaid.com/articles/2550f1fef439986b8fa25f316deb7203.jpeg',
          text: `人这一生大约会遇到 80000 人\n有人逐渐断线，有人逐渐走来\n有人砰然心动，最后擦肩而过\n有些人伫立在字里行间，而我停笔太久`
        },
        {
          imgUrl: 'http://static.tasaid.com/articles/c988c40d151aa2f998d628f765d5dccf.jpeg',
          text: '于是有事发生让你醒来，不是吗？是梦还是别的？\n我听到奇特的声音。\n是什么？\n是尖叫，一种尖叫，像孩子般的声音。\n你看到了什么？\n羔羊们在号叫。'
        },
      ],

    }
  }

  componentDidMount() {
    // const { history } = this.props;
  }

  render() {
    const { storyList } = this.state;
    return (
      <div className="HomePage">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
        <a
          className="App-link"
          href="/login"
          rel="noopener noreferrer"
        >
          路由
        </a>
        </div>
      </header>
      <section className="content">
        <div className="banner">
          <div className="webset-desc">
            <p>一怒而诸侯惧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安居则天下息</p>
          </div>
        </div>
        <div className="story-list">
          {
            storyList.map((item, i) => {
              return <div key={i} className="story-item">
                <div className="picture" style={{backgroundImage: `url(${item.imgUrl})`}}></div>
                <div className="story-text" dangerouslySetInnerHTML={{__html: item.text}}></div>
              </div>
            })
          }
        </div>
      </section>
      <footer>

      </footer>
    </div>
    )
  }
}

//创建组建的第二种方式function
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default HomePage;
