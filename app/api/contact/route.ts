import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { full_name, phone, email, address, fence_type, linear_feet, description, how_heard } =
    await req.json();

  const text = [
    `Name:        ${full_name}`,
    `Phone:       ${phone}`,
    `Email:       ${email}`,
    `Address:     ${address}`,
    `Fence Type:  ${fence_type}`,
    `Linear Feet: ${linear_feet}`,
    description ? `\nProject Notes:\n${description}` : '',
    how_heard ? `\nHow They Heard: ${how_heard}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const { data, error } = await resend.emails.send({
      from: 'Amarillo Fence Co <contact@amarillofenceco.com>',
      to: 'charlie@amarillofenceco.com',
      subject: `New Estimate Request from ${full_name}`,
      reply_to: email,
      text,
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ data });
  } catch (e) {
    return Response.json({ error: 'Failed to send' }, { status: 500 });
  }
}
