import { connect } from 'react-redux'
import Cart from "../components/Cart";
import { addToSell } from '../service/actions/actions'

const mapStateToProps = state => ({
    data: state.cardItems.cardData
})

const mapDispatchToProps = dispatch => ({
    addToSellHandler: data => dispatch(addToSell(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)