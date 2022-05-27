export default `
PR ${process.env.INPUT_PR_STATE} 
        
PR Number:      ${process.env.INPUT_PR_NUM}
        
PR Title:       ${process.env.INPUT_PR_TITLE}
        
PR Body:        *${process.env.INPUT_PR_BODY}*
        
Merged By:          ${process.env.GITHUB_ACTOR}
        
[Link to PR](https://github.com/${process.env.GITHUB_REPOSITORY}/pull/${process.env.INPUT_PR_NUM})
[Link to Repo ](https://github.com/${process.env.GITHUB_REPOSITORY}/)
[Build log here](https://github.com/${process.env.GITHUB_REPOSITORY}/commit/${process.env.GITHUB_SHA}/checks)`;