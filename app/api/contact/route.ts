import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi giriniz'),
  subject: z.string().min(5, 'Konu en az 5 karakter olmalıdır'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'alpir756@gmail.com',
      subject: `Portfolio: ${subject}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla gönderildi!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
