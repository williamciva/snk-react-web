const fs = require('fs')
const args = require('minimist')(process.argv.slice(2),
{
    alias: {
        h: 'help',
        b: 'build',
        d: 'dashboard',
    }
});
 
(()=>{
    const help = args.help;
    const build = args.build;
    const dashboard = args.dashboard;
    
    if (build){
        try {
            var data = `import React from 'react'
            import { createRoot } from "react-dom/client";
            const Dashboard = require('./dashboards/${dashboard}/${dashboard}').default()
            const root = createRoot(document.getElementById('root-${dashboard}') as HTMLElement)
            root.render(Dashboard)`.replace(/  +/g, '') // the replace on final is to not break line
            
            fs.writeFileSync('./src/index.tsx', data)
        } catch (error) {
            console.log(error)
        }
    }
})()
