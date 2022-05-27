export default process.env.INPUT_PR_STATE === 'review_requested' ? `
PR: ${process.env.INPUT_PR_TITLE}
${process.env.INPUT_PR_HEAD_REF} -> ${process.env.INPUT_PR_BASE_REF}

${process.env.GITHUB_ACTOR} requested Reviews from:

${
    process.env.INPUT_PR_REQUESTED_REVIEWERS &&
    JSON.parse(process.env.INPUT_PR_REQUESTED_REVIEWERS) &&
    JSON.parse(process.env.INPUT_PR_REQUESTED_REVIEWERS).map(
        (v: Record<string, any>) =>
            `  ${v.login}  `
    ).join('\n')
}

[Link to Diff](${process.env.INPUT_PR_URL}/files)
` : `
PR ${process.env.INPUT_PR_MERGED ? "merged" : process.env.INPUT_PR_STATE}
        
PR Title:       ${process.env.INPUT_PR_TITLE}
${process.env.INPUT_PR_HEAD_REF} -> ${process.env.INPUT_PR_BASE_REF}
        
PR Body:        *${process.env.INPUT_PR_BODY}*
        
Merged By:          ${process.env.INPUT_PR_MERGED_BY}
        
[Link to Diff](${process.env.INPUT_PR_URL}/files)
[Link to Repo](https://github.com/${process.env.GITHUB_REPOSITORY}/)`