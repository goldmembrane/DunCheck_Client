import React from 'react';

const Home = () => {
  return(
    <>
      <div className = "headerBox">
        <div className = "logoBox">logo</div>
        <div className = "titleBox">
          <h1>던체크</h1>
        </div>
      </div>
      <div className = "contentBox">
        <div className = "searchBarBox">
          <input type = "text" className = "searchBar" />
          <button className = "searchButton">검색</button>
        </div>
        <div className = "settingButtonBox">
          <button className = "settingButton">컷 설정하기</button>
        </div>
        <div className = "describeBox">
          <p className = "describe">
            아이디를 검색하면 자신이 정한 컷에 얼마나 맞췄는지 체크하는 사이트입니다.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;