const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

const NOTIFY_TO = "francisco@pmcustom.cl";

export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone?: string | null;
  details?: string | null;
}

function encodeHeader(value: string) {
  // RFC 2047 encoded-word so accents in names/subjects survive.
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function toBase64Url(input: string) {
  return Buffer.from(input, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function sendContactNotification(data: ContactPayload) {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_MAIL_API_KEY"];
  if (!lovableApiKey || !connectionKey) {
    throw new Error("Gmail connector no configurado");
  }

  const subject = `Nueva solicitud web — ${data.name} (${data.company})`;
  const body = [
    "Nueva solicitud desde el formulario de pmcustom.cl",
    "",
    `Nombre: ${data.name}`,
    `Empresa: ${data.company}`,
    `Email: ${data.email}`,
    `Teléfono: ${data.phone || "-"}`,
    "",
    "Detalle del proyecto:",
    data.details || "-",
  ].join("\r\n");

  const raw = toBase64Url(
    [
      `To: ${NOTIFY_TO}`,
      `Reply-To: ${data.email}`,
      `Subject: ${encodeHeader(subject)}`,
      'Content-Type: text/plain; charset="UTF-8"',
      "MIME-Version: 1.0",
      "",
      body,
    ].join("\r\n"),
  );

  const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableApiKey}`,
      "X-Connection-Api-Key": connectionKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Gmail send failed [${response.status}]: ${errorBody}`);
    throw new Error(`Gmail send failed [${response.status}]: ${errorBody}`);
  }
}
