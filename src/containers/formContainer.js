import { connect } from 'react-redux'
import Form from "../components/Form";
import { addToCart } from '../service/actions/actions'

const mapStateToProps = state => ({
   data : state.cardItems.cardData
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Form)