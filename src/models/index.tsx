import React from 'react'
import { createRoot } from "react-dom/client";
const Dashboard = require('./dashboards/${build}/${build}').default()
const root = createRoot(document.getElementById('root-${build}') as HTMLElement)
root.render(Dashboard)