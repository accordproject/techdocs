const axios = require("axios");
const qs = require('qs');

/*
Request body:
{
  "email": "foo@example.com"
}
*/
exports.handler = async (event, context) => {
  try {
    console.log(event.body);
    const payload = qs.parse(event.body);
    console.log(JSON.stringify(payload, null, 2));
    const email = encodeURIComponent(payload.email.trim());
    const SLACK_TOKEN = process.env.SLACK_TOKEN;
    const SLACK_INVITE_ENDPOINT = 'https://slack.com/api/users.admin.invite';
    const toSlack = `email=${email}&token=${SLACK_TOKEN}&set_active=true`;
    const response = await axios.get(`${SLACK_INVITE_ENDPOINT}?${toSlack}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'success',
        details: JSON.stringify(response.body)
      }),
    };
  } catch (error) {
    console.log("error", error);
    return {
      statusCode: 400,
      details: error.message,
    };
  }
};