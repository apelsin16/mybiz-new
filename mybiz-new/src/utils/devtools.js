import React from 'react';
import { createDevTools } from 'redux-devtools';
import DocMonitor from "redux-devtools-dock-monitor";
import LogMonitor from "redux-devtools-log-monitor";

const DevTools = createDevTools(
    <DocMonitor
        toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-Q"
        defaultVisible={true}>
        <LogMonitor theme="tomorrow" />
    </DocMonitor>
);

export default DevTools;