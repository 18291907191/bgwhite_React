import PropTypes from 'prop-types'

const AslideNotice = ({noticeList}) => (
  <div className="aslide-model">
    <h3 className="hd"><span><i className="iconfont">&#xe611;&nbsp;&nbsp;</i>网站公告</span></h3>
    <ul className="aslide-model-cont">
      {
        noticeList.map((item,index) => 
          <li key={+new Date() + index}>
            <a href="/a">{item.cont}</a>
            <span>{item.createTime}</span>
          </li>
        )
      }                 
    </ul>
    <style>{`
      .aslide-model {
        border: 1px solid #eaeaea;
        min-height: 160px;
        _height: 160px;
        margin-bottom: 20px;
        transition: .5s;
      }
      .aslide-model:hover {
        box-shadow: 0 0 10px #ccc;
        transform: transLateY(-5px);
      }
      .aslide-model .hd {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #eaeaea;
        background-color: #fbfbfb;
      }
      .aslide-model .hd span {
        display: inline-block;
        height: 100%;
        padding: 0 20px 0 10px;
        background-color: #ffffff;
        border-right: 1px solid #eaeaea;
        border-bottom: 1px solid #ffffff;
      }
      .aslide-model-cont {
        padding: 5px 10px;
      }
      .aslide-model-cont li {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-item: center;
        line-height: 30px;
      }
      .aslide-model-cont li a:hover {
        color: #45BCF9;
      }
      .aslide-model-cont li a {
        color: #333333;
        display: block;
        // width: 280px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-shadow: 0px 0px 2px #ffffff;
      }
      .aslide-model-cont li span {
        float: right;
      }
    `}</style>
  </div>    
)

// AslideNotice.propTypes = {
//   noticeList: PropTypes.object
// }
// AslideNotice.defaultProps = {
//   noticeList: []
// }

export default AslideNotice;