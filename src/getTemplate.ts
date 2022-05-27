import pushTemplate from './templates/push';
import prTemplate from './templates/pull_request';
import prTargetTemplate from './templates/pull_request_target';
import issuesTemplate from './templates/issues';
import scheduleTemplate from './templates/schedule';
import defaultTemplate from './templates/default';
import {TemplateEnum} from "./enums";
const getTemplate = (type: TemplateEnum): string => {
    switch (type) {
        case 'push': return pushTemplate;
        case 'pull_request': return prTemplate;
        case 'pull_request_target': return prTargetTemplate;
        case 'issues': return issuesTemplate;
        case 'schedule': return scheduleTemplate;
        default: return defaultTemplate;
    }
};

export {
    getTemplate
}