/*
* @date         : 2022-12-07
* @description  : app sign
* @parameter    : title
*/

import React, { useEffect, useState } from 'react';

const App = () => {
    return (
        <div>
            sign
        </div>
    )
}

//export default App;
export default React.memo(App);

App.defaultProps = {
    scrollTop: true,
    background: 'transparent',
};