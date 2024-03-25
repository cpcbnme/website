import type {LanyardResponse, Snowflake} from 'use-lanyard';

export async function getDiscordStatus(id: Snowflake) {
	const lanyard = await fetch(`https://api.lanyard.rest/v1/users/${id}`, {next: { tags: ['discord']}}).then(
		res => res.json() as Promise<LanyardResponse>,
	);

	if (!lanyard.success) {
		throw new Error('API failed.');
	}

	return lanyard.data;
}