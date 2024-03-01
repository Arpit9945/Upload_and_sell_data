import { connect } from 'react-redux'
import Sell from "../components/Sell";
import { RemoveToCart, addToSell } from '../service/actions/actions'

const mapStateToProps = state => ({
   data: state.sellItems.sellData,
})

const mapDispatchToProps = dispatch => ({
    addToSellHandler: data => dispatch(addToSell(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sell)
