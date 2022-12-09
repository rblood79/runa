/*
* @date         : 2022-12-07
* @description  : app main
* @parameter    : title
*/

import React, { useEffect, useState } from 'react';

import { Cell } from '../../components';

//import portrait from './portrait.module.css';
//import landscape from './landscape.module.css';

const App = () => {

    const [orientation, setOrientation] = useState(true)
    const [layout, setLayout] = useState(
        {
            INI: {
                ORIENTATION: orientation, // portrait, landscape
                PADDING: '1cm'
            },

            PAGE: [
                {
                    DATA: [
                        {
                            LAYER: 'head',
                            REPEAT: true,
                            WIDTH: '100%',
                            HEIGHT: 'auto',
                            PADDING: '0px',
                            COLOR: '#ff0000',
                            BACKGROUND: '#f00',
                            FONT: 'Arial',
                            FONTSIZE: '10pt',
                            DATA: [
                                {
                                    WIDTH: 'auto',
                                    HEIGHT: 'auto',
                                    PADDING: '0px',
                                    COLOR: '#ff0000',
                                    BACKGROUND: '#cccccc',
                                    FONT: 'Arial',
                                    FONTSIZE: '10pt',
                                    DATA: [
                                        {
                                            WIDTH: 'auto',
                                            HEIGHT: 'auto',
                                            PADDING: '0px',
                                            COLOR: '#ff0000',
                                            BACKGROUND: '#cc00cc',
                                            FONT: 'Arial',
                                            FONTSIZE: '10pt',
                                            VALUE: 'QAWSED',
                                        },
                                        {
                                            WIDTH: 'auto',
                                            HEIGHT: 'auto',
                                            PADDING: '0px',
                                            COLOR: '#ff0000',
                                            BACKGROUND: '#ccc',
                                            FONT: 'Arial',
                                            FONTSIZE: '10pt',
                                            VALUE: 'EFE59',
                                        }
                                    ]
                                },
                                {
                                    WIDTH: 'auto',
                                    HEIGHT: 'auto',
                                    PADDING: '4px',
                                    COLOR: '#ff0000',
                                    BACKGROUND: '#cccccc',
                                    FONT: 'Arial',
                                    FONTSIZE: '10pt',
                                    VALUE: '9874',
                                }
                            ]
                        },
                        {
                            LAYER: 'body',
                            REPEAT: false,
                            WIDTH: '100%',
                            HEIGHT: 'auto',
                            BACKGROUND: '#cccccc',
                            VALUE: 'grid',
                            DATA: []
                        },
                        {
                            LAYER: 'foot',
                            REPEAT: true,
                            WIDTH: '100%',
                            HEIGHT: 'auto',
                            BACKGROUND: '#eeccee',
                            VALUE: 'food',
                            DATA: []
                        }
                    ]
                },

            ]

        },
    )
    useEffect(() => {
        orientation ? import ('./portrait.css') : import ('./landscape.css');
    }, [orientation])
    return (
        <div className='container'>

            <div className='controller'>
                <button onClick={() => {

                }}>load</button>
                <button onClick={() => {

                }}>save</button>
                <button onClick={() => {
                    setOrientation(!orientation)
                }}>orientation</button>
                <button onClick={() => {
                    window.print()
                }}>print</button>
            </div>

            <div className='contents'>
                <div className={orientation ? 'page portrait' : 'page landscape'} style={{ padding: layout.INI.PADDING }}>
                    {
                        layout.PAGE[0].DATA.map((item, index) => (

                            <Cell key={index} {...item}>
                            </Cell>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

//export default App;
export default React.memo(App);

App.defaultProps = {
    scrollTop: true,
    background: 'transparent',
};