exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const data = JSON.parse(event.body || "{}");
    // TODO: forward to email/DB/CRM
    console.log("Contact submission:", data);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ ok: false }) };
  }
};
