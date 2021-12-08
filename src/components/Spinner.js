import React from 'react'
import './spinner.css'
import '../../node_modules/spinkit/spinkit.min.css';
const Spinner = () => {
    return (
        <div className='spinner'>
            <div class="sk-bounce">
                <div class="sk-bounce-dot"></div>
                <div class="sk-bounce-dot"></div>
            </div>


        </div>
    )
}

export default Spinner
