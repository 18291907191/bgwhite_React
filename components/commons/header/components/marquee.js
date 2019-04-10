import { connect } from 'react-redux';

const MarQuee = (props) => (
  <div className="text-center">
    <marquee 
      behavior="slide"
    >
      {props.goodSentences}
    </marquee>
  </div>
)

const mapStateToProps = (state) => {
  return {
    goodSentences: state.header.get('goodSentences'),
  }
}

export default connect(mapStateToProps,null)(MarQuee);