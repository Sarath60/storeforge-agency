import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  const body = await req.json();

  const { name, email, store, category, products, example } = body;

  await resend.emails.send({
    from: "StoreForge <onboarding@resend.dev>",
    to: "sarathm.0697@gmail.com",
    subject: "New StoreForge Lead",
    html: `
      <h2>New Store Request</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Store Name:</strong> ${store}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Products:</strong> ${products}</p>
      <p><strong>Example Store:</strong> ${example}</p>
    `
  });

  return Response.json({ success: true });

}