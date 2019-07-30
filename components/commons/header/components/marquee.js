import { connect } from 'react-redux';

const MarQuee = (props) => (
  <div>
    <marquee 
      behavior="slide"
    >
      {props.goodSentences[[parseInt(10*Math.random())]]}
    </marquee>
  </div>
)

const mapStateToProps = (state) => {
  return {
    goodSentences: state.header.goodSentences,
  }
}

export default connect(mapStateToProps,null)(MarQuee);