import 'dotenv/config'
import { Telegraf } from 'telegraf';
import {getTemplate} from "./getTemplate"
import {TemplateEnum} from "./enums";

if(process.env.INPUT_TOKEN && process.env.INPUT_CHAT) {
    const bot = new Telegraf(process.env.INPUT_TOKEN);
    bot.telegram.sendMessage(
        process.env.INPUT_CHAT,
        getTemplate((process.env.GITHUB_EVENT_NAME || 'default') as TemplateEnum), {parse_mode: "Markdown"}
    );
}