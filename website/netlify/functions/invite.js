import axios from 'axios';

dotenv.config();

/*
Request body:
{
  "email": "foo@example.com"
}
*/
export async function handler(event, context, callback) {
  try {
    const payload = JSON.parse(event.body);
    const email = encodeURIComponent(payload.params.email.trim());
    const SLACK_TOKEN = process.env.SLACK_TOKEN;
    const SLACK_INVITE_ENDPOINT = 'https://slack.com/api/users.admin.invite';
    const toSlack = `email=${email}&token=${SLACK_TOKEN}&set_active=true`;
    await axios.get(`${SLACK_INVITE_ENDPOINT}?${toSlack}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'success'
      }),
    };
  } catch (error) {
    console.log("error", error);
    return {
      statusCode: 400,
      body: error.message,
    };
  }
}