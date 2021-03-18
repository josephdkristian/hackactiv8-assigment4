import { connect } from 'react-redux';
import { multiplicationProcess } from '../../Services/Users/users.reducer';



const Bills = (props) => {
    return (
        <>
          <a onClick={() => props.dispatch(multiplicationProcess(2))}>
              Click Here to multiplication the state, current state : {props.state.users}
          </a>
            
        </>
    )
}

export default connect(
    (state) => ({ state }) //mapStateToProps
    )(Bills);