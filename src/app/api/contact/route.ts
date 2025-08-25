import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Vul naam, e-mail en bericht in." }, { status: 400 });
    }

    // In a real app, send email or store in CRM here.
    console.log("Contact form submission", { name, email, phone, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Er ging iets mis. Probeer later opnieuw." }, { status: 500 });
  }
}


