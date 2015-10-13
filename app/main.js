import React from 'react'
import ReactDom from 'react-dom'

import ListAppender from './list-appender'

ReactDom.render(<ListAppender label="Append one"/>,
                document.getElementById('app'));

