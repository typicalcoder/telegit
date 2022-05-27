export default `
PR ${process.env.INPUT_PR_MERGED ? "merged" : process.env.INPUT_PR_MERGED}
        
PR Title:       ${process.env.INPUT_PR_TITLE}
        
PR Body:        *${process.env.INPUT_PR_BODY}*
        
Merged By:          ${process.env.INPUT_PR_MERGED_BY}
        
[Link to Diff](${process.env.INPUT_PR_URL}/files)
[Link to Repo](https://github.com/${process.env.GITHUB_REPOSITORY}/)`