import {PropTypes} from "prop-types";

export default function CounterButtons({by, incrementMethod, decrementMethod}) {
    // function incrementCounterFunction() {
    //     incrementMethod(by)
    // }

    // function decrementCounterFunction() {
    //     decrementMethod(by)
    // }

    return(
        <div className="Counter">
            <div>
                <button className="counterButton"
                        onClick={() => incrementMethod(by)}
                >+{by}</button>
                <button className="counterButton"
                        onClick={() => decrementMethod(by)}
                >-{by}</button>
            </div>
        </div>
    )
}
CounterButtons.propTypes = {
    by: PropTypes.number
}

CounterButtons.defaultProps = {
    by: 1
}