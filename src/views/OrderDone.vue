<template>

      <div class="container-fluid">
        <div class="customer-card container">
          <h4 class="fw-bold text-center">訂單已完成</h4>
  
          <!-- 進度條 -->
          <ul class="progress">
            <li class="is-complete">訂單資訊</li>
            <li class="is-complete">確認</li>
            <li class="is-complete">完成</li>
          </ul>
  
          <div>
           
              更正您的資料
          </div>

        </div>
      </div>

  </template>
  <script>
  export default {
    components: {},
    data() {
      return {
      };
    },
   
  };
  </script>
  <style>
  h4 {
    color: #ec6d4e;
  }
  h5 {
    font-size: 15pt;
    padding-bottom: 15pt;
  }
  a {
    text-decoration: none;
    color: #ec6d4e;
    font-weight: 700;
  }
  .customer-card {
    width: 600px;
    margin-top: 100px;
    border-radius: 10px;
    background-color: white;
    padding: 50px;
  }
  .required {
    display: inline;
    font-weight: 700;
    color: #e82121;
    font-size: 11px;
    margin-left: 5px;
  }
  /* 進度條 */
  .progress {
    list-style: none;
    padding: 40px;
    display: table;
    table-layout: fixed;
    width: 100%;
    background-color: #fff;
  }
  .progress > li {
    position: relative;
    display: table-cell;
    text-align: center;
    font-size: 12pt;
    font-weight: 700;
  }
  /* 圓圈 */
  .progress > li:before {
    content: "";
    position: relative;
    display: block;
    background: #dfe3e4;
    width: 0.8em;
    height: 0.8em;
    margin: 0 auto;
    margin-bottom: 0.25em;
    text-align: center;
    line-height: 3em;
    border-radius: 100%;
    z-index: 1000;
  }
  /* 左線 */
  .progress > li:after {
    content: "";
    position: absolute;
    display: block;
    background: #dfe3e4;
    width: 100%;
    height: 0.1em;
    top: 0.4em;
    right: 50%;
    z-index: 0;
  }
  /* 消除尾線 */
  .progress > li:first-child:after {
    display: none;
  }
  /* 字變色 */
  .progress > li.is-complete {
    color: #ec6d4e;
  }
  .progress > li.is-complete:before,
  .progress > li.is-complete:after {
    color: #fff;
    background: #ec6d4e;
  }
  /* .progress > li.is-active {
    color: #dfe3e4;
  }
  .progress > li.is-active:before {
    color: #fff;
    background: #ec6d4e; 
  } */
  /* 進度條end */
  .order_info {
    margin: 0 auto;
    width: 100%;
    font-size: 11pt;
  }
  
  </style>
  