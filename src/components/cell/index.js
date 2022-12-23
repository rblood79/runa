/*
* @date         : 2022-12-07
* @description  : cell
* @parameter    : title
*/

import React, { useEffect, useState, useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

import { Cell } from '../../components';

import styles from './index.module.css';

const App = (props) => {
    console.log(props.EDIT)
    const containerRef = useRef(null);
    const dragEl = useRef(null);

    const [edit, setEdit] = useState(props.EDIT);

    const [{ x, y, width, height }, api] = useSpring(() => ({ x: 0, y: 0, width: 100, height: 100 }));

    /*const bind = useDrag((state) => {
        const isResizing = (state?.event.target === dragEl.current);
        if (isResizing) {
            api.set({
                width: state.offset[0],
                height: state.offset[1],
            });
        } else {
            api.set({
                x: state.offset[0],
                y: state.offset[1],
            });
        }
    }, {
        from: (event) => {

        },
        bounds: (state) => {

        },
    });*/

    const bind = useDrag((state) => {
        console.log(state.event.target)
    }, {})

    useEffect(() => {

    }, [])

    return (
        <animated.div
            className={styles.container}
            style={{
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
            onClick={() => {
                setEdit(true)
            }}
        >
            {
                edit &&
                <ul className={styles.resize}>
                    <li className={styles.resizeTop} {...bind()} />
                    <li className={styles.resizeRight} {...bind()} />
                    <li className={styles.resizeBottom} {...bind()} />
                    <li className={styles.resizeLeft} {...bind()} />
                </ul>
            }


            {
                props.VALUE ? props.VALUE :
                    props.DATA.map((item, index) => (
                        <Cell key={index} {...item}>
                        </Cell>
                    ))

            }
        </animated.div>
    )
}

//export default App;
export default React.memo(App);

App.defaultProps = {
    BORDER: '1px solid #f00',
    BACKGROUND: 'transparent',
    COLOR: '#000000',
};