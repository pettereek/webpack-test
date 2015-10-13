import React from 'react'
import ReactDom from 'react-dom'

import ListAppender from './components/list-appender'

ReactDom.render(<ListAppender label="Append one"/>,
                document.getElementById('app'));

require("./styles/main.scss")

