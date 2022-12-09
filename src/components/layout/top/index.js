/*
* @date         : 2022-12-07
* @description  : app top
* @parameter    : title
*/

import React, { useEffect, useState } from 'react';

const App = () => {
    return (
        <header>
            header- nav
        </header>
    )
}

//export default App;
export default React.memo(App);

App.defaultProps = {
    scrollTop: true,
    background: 'transparent',
};