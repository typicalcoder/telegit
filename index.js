require("dotenv").config
const Bot=require('node-telegram-bot-api');
const {
    INPUT_STATUS: ipstatus,
    INPUT_TOKEN: tgtoken,
    INPUT_CHAT: chatid,
    INPUT_IU_TITLE: ititle,
    INPUT_IU_NUM: inum,
    INPUT_IU_ACTOR: iactor,
    INPUT_IU_BODY: ibody,
    INPUT_PR_NUM: pnum,
    INPUT_PR_STATE: prstate,
    INPUT_PR_TITLE: ptitle,
    INPUT_PR_BODY: pbody,
    INPUT_PR_BASE_REF: base_ref,
    INPUT_PR_HEAD_REF: head_ref,
    INPUT_PR_CHANGED_FILES: changed_files,
    INPUT_PR_MERGED_BY: merged_by,
    INPUT_PR_URL: pr_url,
    INPUT_PUSH_AUTHOR: push_author,
    INPUT_PUSH_COMPARE_URL: push_compare_url,
    INPUT_PUSH_COMMITS: push_commits,
    GITHUB_EVENT_NAME: ghevent,
    GITHUB_REPOSITORY: repo,
    GITHUB_ACTOR: ghactor,
    GITHUB_SHA: sha,
    GITHUB_WORKFLOW: ghwrkflw
} = process.env;

const bot=new Bot(tgtoken)

const evresp = (gevent) => {
    switch (gevent) {

        case "issues":
            return `
❗️❗️❗️❗️❗️❗️
        
Issue ${prstate}

Issue Title and Number  : ${ititle} | #${inum}

Commented or Created By : \`${iactor}\`

Issue Body : *${ibody}*

[Link to Issue](https://github.com/${repo}/issues/${inum})
[Link to Repo ](https://github.com/${repo}/)
[Build log here](https://github.com/${repo}/commit/${sha}/checks)`
        case "issue_comment":
            return `
🗣🗣🗣🗣🗣🗣

Issue ${prstate}

Issue Title and Number  : ${ititle} | #${inum}

Commented or Created By : \`${iactor}\`

Issue Body : *${ibody}*

Issue Comment: \`${process.env.INPUT_IU_COM}\`

[Link to Issue](https://github.com/${repo}/issues/${inum})
[Link to Repo ](https://github.com/${repo}/)
[Build log here](https://github.com/${repo}/commit/${sha}/checks)
            `
        case "pull_request":
            return `
🔃🔀🔃🔀🔃🔀
PR ${prstate} 
        
PR Number:      ${pnum}
        
PR Title:       ${ptitle}
        
PR Body:        *${pbody}*
        
Merged By:          ${ghactor}
        
[Link to PR](https://github.com/${repo}/pull/${pnum})
[Link to Repo ](https://github.com/${repo}/)
[Build log here](https://github.com/${repo}/commit/${sha}/checks)`
        case "pull_request_target":
            return `
PR ${prstate}
        
PR Title:       ${ptitle}
        
PR Body:        *${pbody}*
        
Merged By:          ${merged_by.login}
        
[Link to Diff](${pr_url}/files)
[Link to Repo](https://github.com/${repo}/)
[Build log here](https://github.com/${repo}/commit/${sha}/checks)`

        case "push":
            return `
Author:       ${push_author}
        
Commits:
${spush_commits.map(v => `[${v.message} by ${v.author.username}](${v.url})\n`)}
        
[Link to Compare](${push_compare_url})
[Link to Repo](https://github.com/${repo}/)`
        case "watch":
            return `
⭐️⭐️⭐️

By:            *${ghactor}* 
        
\`Repository:  ${repo}\` 
        
Star Count      ${process.env.INPUT_STARGAZERS}
        
Fork Count      ${process.env.INPUT_FORKERS}
        
[Link to Repo ](https://github.com/${repo}/)
            `
        case "schedule":
            return `
⏱⏰⏱⏰⏱⏰
        
ID: ${ghwrkflw}
        
Run *${ipstatus}!*
        
*Action was Run on Schedule*
        
\`Repository:  ${repo}\` 
        
[Link to Repo ](https://github.com/${repo}/)
            `
        default:
            return `
⬆️⇅⬆️⇅
            
ID: ${ghwrkflw}
        
Action was a *${ipstatus}!*
        
\`Repository:  ${repo}\` 
        
On:          *${ghevent}*
        
By:            *${ghactor}* 
        
Tag:        ${process.env.GITHUB_REF}
        
[Link to Repo ](https://github.com/${repo}/)
            `
    }
}
const output = evresp(ghevent)
bot.sendMessage(chatid,output,{parse_mode : "Markdown"})