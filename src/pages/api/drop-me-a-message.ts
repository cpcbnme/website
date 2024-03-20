import { api } from "@/server/api";
import { env } from "@/server/env";
import { codeblock } from "@/utils/discord";
import { bwitch } from "bwitch";
import { NextkitError } from "nextkit";
import { z } from "zod";

const schema = z.object({
	email: z.string().email(),
	body: z.string().max(500).min(10),
});

export default api({
    async POST({req, ctx}) {
        const body = schema.parse(req.body)

        const ip = (req.headers['x-forwarded-for'] as string) ?? req.socket.remoteAddress ?? null;

        const result = await fetch(env.DISCORD_WEBHOOK, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
				content: 'contact form submission',
				embeds: [
					{
                        title: `:incoming_envelope: ${body.email}`,
                        color: "14177041",
						description: `:pencil: ${body.body}`,
						author: {name: "Contact form submission"},
						fields: [{name: `:earth_americas: Location`, value: ip ?? 'unknown!?'}],
					},

				],
			}),
        })

        if(result.status >= 400) {
            throw new NextkitError(result.status, 'Something went wrong');
        }

        return bwitch(req.headers['content-language'])
        .case('application/json', () => ({ sent: true}))
        .or(() => ({ _redirect: '/thanks'}))
    }
})

