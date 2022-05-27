import pushTemplate from './templates/push';
import prTemplate from './templates/pull_request';
import prTargetTemplate from './templates/pull_request_target';
import issuesTemplate from './templates/issues';
import scheduleTemplate from './templates/schedule';
import defaultTemplate from './templates/default';
import {TemplateEnum} from "./enums";
const getTemplate = (type: TemplateEnum): string => {
    console.log(type);
    switch (type) {
        case TemplateEnum.push: return pushTemplate;
        case TemplateEnum.pull_request: return prTemplate;
        case TemplateEnum.pull_request_target: return prTargetTemplate;
        case TemplateEnum.issues: return issuesTemplate;
        case TemplateEnum.schedule: return scheduleTemplate;
        default: return defaultTemplate;
    }
};

export {
    getTemplate
}