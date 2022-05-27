export default `            
ID: ${process.env.GITHUB_WORKFLOW}
        
Action was a *${process.env.INPUT_STATUS}!*
        
\`Repository:  ${process.env.GITHUB_REPOSITORY}\` 
        
Event:          *${process.env.GITHUB_EVENT_NAME}*
        
By:            *${process.env.GITHUB_ACTOR}* 
        
Tag:        ${process.env.GITHUB_REF}
        
[Link to Repo ](https://github.com/${process.env.GITHUB_REPOSITORY}/)
            `;