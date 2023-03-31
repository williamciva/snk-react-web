import React from 'react'
import { createRoot } from "react-dom/client";
import './dashboard.css'

export default function dashboard() {
  return (
    <div>dashboard</div>
  )
}

const root = createRoot(document.getElementById('root-dashboard') as HTMLElement)
root.render(dashboard())