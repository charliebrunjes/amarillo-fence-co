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
      // TODO: once amarillofenceco.com is verified at resend.com/domains, change from to:
      // 'Amarillo Fence Co <contact@amarillofenceco.com>'
      // and change to back to: 'charlie@amarillofenceco.com'
      from: 'Amarillo Fence Co <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL ?? 'charliebrunjes23@gmail.com',
      subject: `New Estimate Request from ${full_name}`,
      replyTo: email,
      text,
    });

    if (error) {
      console.error('[contact] Resend error:', JSON.stringify(error));
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ data });
  } catch (e) {
    console.error('[contact] Exception:', e);
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
