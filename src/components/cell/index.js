/*
* @date         : 2022-12-07
* @description  : cell
* @parameter    : title
*/

import React, { useEffect, useState } from 'react';
import { Cell } from '../../components';

const App = (props) => {
    useEffect(() => {
        
    }, [])

    return (
        <div style={{
            width: props.WIDTH,
            height: props.HEIGHT,
            padding: props.PADDING,
            background: props.BACKGROUND,
            color: props.COLOR,
            fontFamily: props.FONT,
            fontSize: props.FONTSIZE,
            //border: props.VALUE && '1px solid #000'
        }}
            data-id={props.ID}
        >
            {
                props.VALUE ? props.VALUE :
                    props.DATA.map((item, index) => (
                        <Cell key={index} {...item}>
                        </Cell>
                    ))

            }
        </div>
    )
}

//export default App;
export default React.memo(App);

App.defaultProps = {
    BORDER: '1px solid #f00',
    BACKGROUND: 'transparent',
    COLOR: '#000000',
};