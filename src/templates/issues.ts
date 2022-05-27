export default `
❗️❗️❗️❗️❗️❗️
        
Issue ${process.env.INPUT_PR_STATE} 

Issue Title and Number  : ${process.env.INPUT_IU_TITLE} | #${process.env.INPUT_IU_NUM}

Commented or Created By : \`${process.env.INPUT_IU_ACTOR}\`

Issue Body : *${process.env.INPUT_IU_BODY}*

[Link to Issue](https://github.com/${process.env.GITHUB_REPOSITORY}/issues/${process.env.INPUT_IU_NUM})
[Link to Repo ](https://github.com/${process.env.GITHUB_REPOSITORY}/)
[Build log here](https://github.com/${process.env.GITHUB_REPOSITORY}/commit/${process.env.GITHUB_SHA}/checks)`;