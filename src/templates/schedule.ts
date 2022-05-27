export default `
⏱⏰⏱⏰⏱⏰
        
ID: ${process.env.GITHUB_WORKFLOW}
        
Run *${process.env.INPUT_STATUS}!*
        
*Action was Run on Schedule*
        
\`Repository:  ${process.env.GITHUB_REPOSITORY}\` 
        
[Link to Repo ](https://github.com/${process.env.GITHUB_REPOSITORY}/)
            `;