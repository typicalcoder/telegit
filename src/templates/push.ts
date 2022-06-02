export default `
Pushed commits to ${(process.env.GITHUB_REF || '').split('/').pop()}

Author:       ${process.env.INPUT_PUSH_AUTHOR}
        
Commits:
${
    process.env.INPUT_PUSH_COMMITS &&
    JSON.parse(process.env.INPUT_PUSH_COMMITS) &&
    JSON.parse(process.env.INPUT_PUSH_COMMITS).map(
        (v: Record<string, any>) => 
            `  [${v.message.replace("_", "\\_").replace("*", "\\*").replace("[", "\\[").replace("`", "\\`")} by ${v.author.username}](${v.url})  `
    ).join('\n')
}
        
[Link to Compare](${process.env.INPUT_PUSH_COMPARE_URL})
[Link to Repo](https://github.com/${process.env.GITHUB_REPOSITORY}/)`;