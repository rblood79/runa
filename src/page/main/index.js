/*
* @date         : 2022-12-07
* @description  : app main
* @parameter    : title
*/

import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Cell } from '../../components';

axios.defaults.withCredentials = true;
//import portrait from './portrait.module.css';
//import landscape from './landscape.module.css';

const App = () => {
    const ref = useRef();
    const [orientation, setOrientation] = useState(true);
    const [item, setItem] = useState(null);
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
                            ID: '00',
                            LAYER: 'head',
                            REPEAT: true,
                            WIDTH: '100%',
                            HEIGHT: '300x',
                            PADDING: '16px',
                            COLOR: '#ff0000',
                            BACKGROUND: '#f00',
                            FONT: 'Arial',
                            FONTSIZE: '10pt',
                            EDIT: false,
                            DATA: [
                                {
                                    ID: '01',
                                    WIDTH: 'auto',
                                    HEIGHT: 'auto',
                                    PADDING: '16px',
                                    COLOR: '#ff0000',
                                    BACKGROUND: '#cccccc',
                                    FONT: 'Arial',
                                    FONTSIZE: '10pt',
                                    EDIT: false,
                                    DATA: [
                                        {
                                            ID: '011',
                                            WIDTH: 'auto',
                                            HEIGHT: 'auto',
                                            PADDING: '0px',
                                            COLOR: '#ff0000',
                                            BACKGROUND: '#cc00cc',
                                            FONT: 'Arial',
                                            FONTSIZE: '10pt',
                                            VALUE: 'QAWSED',
                                            EDIT: false,
                                        },
                                        {
                                            ID: '012',
                                            WIDTH: 'auto',
                                            HEIGHT: '58px',
                                            PADDING: '0px',
                                            COLOR: '#ff0000',
                                            BACKGROUND: '#343434',
                                            FONT: 'Arial',
                                            FONTSIZE: '10pt',
                                            VALUE: 'EFE59',
                                            EDIT: false,
                                        }
                                    ]
                                },
                                {
                                    ID: '02',
                                    WIDTH: 'auto',
                                    HEIGHT: 'auto',
                                    PADDING: '4px',
                                    COLOR: '#ff0000',
                                    BACKGROUND: '#a9dd65',
                                    FONT: 'Arial',
                                    FONTSIZE: '10pt',
                                    VALUE: '9874',
                                    EDIT: false,
                                }
                            ]
                        },
                        {
                            ID: '10',
                            LAYER: 'body',
                            REPEAT: false,
                            WIDTH: '100%',
                            HEIGHT: 'auto',
                            BACKGROUND: '#cccccc',
                            VALUE: 'body',
                            EDIT: false,
                            DATA: [],
                        },
                        {
                            ID: '20',
                            LAYER: 'foot',
                            REPEAT: true,
                            WIDTH: '100%',
                            HEIGHT: 'auto',
                            BACKGROUND: '#eeccee',
                            VALUE: 'food',
                            EDIT: false,
                            DATA: [],
                        }
                    ]
                },

            ]

        },
    )
    
    const downHandle = useCallback((event) => {
        console.log('>>',item)        
    }, [layout]);

    const clickHandle = useCallback((event) => {
        const targetID = event.target.dataset.id;
        console.log(targetID)
        setItem(targetItem(layout, 'ID', targetID));
    }, [layout]);

    const targetItem = (entireObj, keyToFind, valToFind) => {
        let foundItem;
        JSON.stringify(entireObj, (_, nestedValue) => {
            if (nestedValue && nestedValue[keyToFind] === valToFind) {
                foundItem = nestedValue;
            }
            return nestedValue;
        });
        return foundItem;
    };
    
    useEffect(() => {
        //orientation ? import ('./portrait.css') : import ('./landscape.css');
        ref.current.addEventListener("mousedown", downHandle);
        ref.current.addEventListener("click", clickHandle);
    }, [clickHandle, downHandle, ref])

    useEffect(() => {
        console.log(item)
    }, [item])
    return (
        <div className='container'>

            <div className='controller'>
                <button onClick={() => {
                    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

                    axios({
                        url: 'http://localhost:9000/runa/save/Untitled2.html',
                        method: 'GET',
                    }).then((res) => {
                        console.log(res.data);
                    })
                }}>load</button>
                <button onClick={() => {

                }}>save</button>
                <button onClick={() => {
                    const tempHTML = '<table data-set="null" data-repeat="false" data-fit="none" table-border="none" data-xresize="undefined" class="layout cont0"><colgroup><col width="461"><col width="261"><col width="261"><col width="263"></colgroup><thead></thead><tbody><tr height="200"><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: right;" class=""><img width="202" height="auto" src="https://shop-phinf.pstatic.net/20221212_225/1670817693708vWqPK_JPEG/3_ED8380EC9E84ED8AB9EAB080_3.jpg">AAAAAA</td><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">B</td><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">C</td><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">D</td></tr><tr height="32"><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">E</td><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">F</td><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">G</td><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">H</td></tr><tr height="32"><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">I</td><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">J</td><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">0123</td><td style="border: 1px solid rgb(0, 0, 0); color: rgb(0, 0, 0); padding: 2px; font-size: 10pt; line-height: 11pt; letter-spacing: 0pt; font-family: Arial; text-align: left;" class="">456</td></tr></tbody></table>'

                    var outerXLS = '<html xmlns:v="urn:schemas-microsoft-com:vml"xmlns:o="urn:schemas-microsoft-com:office:office"xmlns:x="urn:schemas-microsoft-com:office:excel"xmlns="http://www.w3.org/TR/REC-html40">';
                    outerXLS += '<head><meta http-equiv=Content-Type content="text/html; charset=utf-8"><meta name=ProgId content=Excel.Sheet></head>';
                    outerXLS += '<body>';
                    outerXLS += tempHTML;
                    outerXLS += '</body></html>';

                    console.log(outerXLS)

                    var link = document.createElement('a');
                    link.download = "test.xls";
                    link.href = 'data:,' + outerXLS;
                    link.click();
                }}>excel</button>
                <button onClick={() => {
                    setOrientation(!orientation)
                }}>orientation</button>
                <button onClick={() => {
                    window.print()
                }}>print</button>
            </div>

            <div className='contents' ref={ref}>
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