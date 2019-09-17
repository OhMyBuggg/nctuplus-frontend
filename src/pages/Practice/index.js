import React from "react";
import styles from "./style.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const photolink = "http://localhost:8080/src/pages/Practice/";

const Film = ({ img, title, owner, times, day }) => (
  <a href={"http://localhost:8080/Login"} className={styles.Film}>
    <img src={img} className={styles.FilmPhoto} />
    <a href={"http://localhost:8080/Login"}></a>
    <div className={styles.FilmName}>{title}</div>
    <body className={styles.Owner}>
      {owner}
      <br />
      觀看次數: {times}萬次·{day}天前
    </body>
  </a>
);

const FilmBox = ({
  title,
  photoname = new Array(6),
  filmname = new Array(6),
  owner = new Array(6),
  times = new Array(6),
  day = new Array(6)
}) => (
  <div className={styles.FilmBox}>
    <b className={styles.BoxTitle}>{title}</b>
    <div className={styles.Films}>
      <Film
        img={photolink + photoname[0]}
        title={filmname[0]}
        owner={owner[0]}
        times={times[0]}
        day={day[0]}
      />
      <Film
        img={photolink + photoname[1]}
        title={filmname[1]}
        owner={owner[1]}
        times={times[1]}
        day={day[1]}
      />
      <Film
        img={photolink + photoname[2]}
        title={filmname[2]}
        owner={owner[2]}
        times={times[2]}
        day={day[2]}
      />
      <Film
        img={photolink + photoname[3]}
        title={filmname[3]}
        owner={owner[3]}
        times={times[3]}
        day={day[3]}
      />
      <Film
        img={photolink + photoname[4]}
        title={filmname[4]}
        owner={owner[4]}
        times={times[4]}
        day={day[4]}
      />
      <Film
        img={photolink + photoname[5]}
        title={filmname[5]}
        owner={owner[5]}
        times={times[5]}
        day={day[5]}
      />
    </div>
  </div>
);

const Menuitem = ({ img, title }) => (
  <Link to="./Login">
    <div className={styles.MenuItem}>
      <img src={photolink + img} className={styles.MenuItemImg} />
      <h7 className={styles.MenuItemTitle}>{title}</h7>
    </div>
  </Link>
);

const NewMenuBar = () => (
  <div className={styles.NewMenuBar}>
    <Menuitem img="menuhome.png" title="首頁" />
    <Menuitem img="menuhot.png" title="發燒影片" />
    <Menuitem img="menusubscribe.png" title="訂閱內容" />
    <div className={styles.MenuLine}></div>
    <Menuitem img="menumedia.png" title="媒體庫" />
    <Menuitem img="menuhistory.png" title="觀看紀錄" />
    <div className={styles.MenuLine}></div>
    <div className={styles.MenuLogin}></div>
    <div className={styles.MenuLine}></div>
    <body className={styles.MenuTitle}>YOUTUBE精選</body>
    <Menuitem img="menuhistory.png" title="觀看紀錄" />
  </div>
);

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchInput: "Search",
      Title: ["發燒影片", "科技-主題", "汽車-主題", "寵物-主題"],
      Box1Photo: [
        "film1photo.png",
        "film2photo.png",
        "film3photo.png",
        "film4photo.png",
        "film5photo.png",
        "film6photo.png"
      ],
      Box1FilmName: [
        "這群人 TGOP │開學的經典語錄 【語錄系列】Classic ...",
        "【千千進食中】山洪暴發土石流!!!珍珠奶茶蛋糕!!!",
        "【Joeman】我到底開甚麼車？價值300萬的豪車開箱...",
        "《一日系列第一百一十三集》四大金剛全體出動，來去通...",
        "手作煉乳彩虹珍珠🌈超夢幻！小資少女不專業自理餐...",
        "林俊傑 JJ Lin 《對的時間點 The Right Time》Official..."
      ],
      Box1Owner: [
        "這群人TGOP",
        "千千進食中",
        "Joeman",
        "木曜4超玩",
        "白癡公主",
        "JJ Lin林俊傑"
      ],
      Box1Times: ["124", "58", "64", "58", "35", "152"],
      Box1Day: ["1", "1", "3", "2", "1", "5"],
      MenuVisible: false
    };
  }
  setSearchInput(word) {
    console.log(word, this.state.SearchInput);
    this.state.SearchInput === "Search"
      ? this.setState({ SearchInput: word })
      : this.setState({ SearchInput: "Search" });
  }
  render() {
    return (
      <div className={styles.MainPage}>
        <NewMenuBar style="visibility:hidden" />
        <div className={styles.NavBar}>
          <div className={styles.MenuIcon}>
            <div className={styles.Menu}>
              <div className={styles.h1}></div>
              <div className={styles.h1}></div>
              <div className={styles.h1}></div>
            </div>
            <img
              src={"http://localhost:8080/src/pages/Practice/youtube.png"}
              className={styles.YoutubeIcon}
            />
          </div>
          <div className={styles.SearchContainer}>
            <input
              type="text"
              className={styles.SearchBar}
              placeholder={this.state.SearchInput}
              onFocus={this.setSearchInput}
              rows="1"
            ></input>
            <img
              src={"http://localhost:8080/src/pages/practice/search.png"}
              className={styles.SearchIcon}
            />
          </div>
          <div className={styles.IconContainer}>
            <img
              src={"http://localhost:8080/src/pages/Practice/videologo.png"}
              className={styles.h2}
            />
            <img
              src={"http://localhost:8080/src/pages/Practice/menulogo.png"}
              className={styles.h2}
            />
            <img
              src={"http://localhost:8080/src/pages/Practice/sharelogo.png"}
              className={styles.h2}
            />
            <img
              src={"http://localhost:8080/src/pages/Practice/settinglogo.png"}
              className={styles.h2}
            />
            <img
              src={"http://localhost:8080/src/pages/Practice/loginlogo.png"}
              className={styles.h2}
            />
          </div>
        </div>
        <div className={styles.MenuBar}>
          <img
            src={"http://localhost:8080/src/pages/Practice/mainpagelogo.png"}
            className={styles.h3}
          />
          <img
            src={"http://localhost:8080/src/pages/Practice/hotlogo.png"}
            className={styles.h3}
          />
          <img
            src={"http://localhost:8080/src/pages/Practice/subscribelogo.png"}
            className={styles.h3}
          />
          <img
            src={"http://localhost:8080/src/pages/Practice/librarylogo.png"}
            className={styles.h3}
          />
          <img
            src={"http://localhost:8080/src/pages/Practice/historylogo.png"}
            className={styles.h3}
          />
        </div>
        <div className={styles.FilmContainer}>
          <a
            href={"https://www.youtube.com/user/xlegendgame"}
            className={styles.Lin}
          >
            <div className={styles.Advertisement}></div>
          </a>
          <FilmBox
            title={this.state.Title[0]}
            photoname={this.state.Box1Photo}
            filmname={this.state.Box1FilmName}
            owner={this.state.Box1Owner}
            times={this.state.Box1Times}
            day={this.state.Box1Day}
          ></FilmBox>
          <FilmBox title={this.state.Title[1]} />
          <FilmBox title={this.state.Title[2]} />
        </div>
      </div>
    );
  }
}

export default Practice;
