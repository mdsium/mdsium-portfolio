import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate fields
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    if (!subject || typeof subject !== 'string' || !subject.trim()) {
      return NextResponse.json({ error: 'Subject is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message content is required' }, { status: 400 });
    }

    const envEmail = process.env.CONTACT_EMAIL;
    const targetEmail =
      envEmail && envEmail.includes('@') && envEmail.trim() ? envEmail.trim() : 'mdsiumcse@gmail.com';
    const origin =
      req.headers.get('origin') ||
      req.nextUrl.origin ||
      'https://ais-dev-53rrhggihb2a4gcx6loheo-591207865396.asia-southeast1.run.app';
    const referer = req.headers.get('referer') || `${origin}/`;
    const userAgent =
      req.headers.get('user-agent') ||
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

    // Dispatch via FormSubmit AJAX endpoint with required headers
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': origin,
        'Referer': referer,
        'User-Agent': userAgent,
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        _subject: `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`,
        message: message.trim(),
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const result = await formSubmitRes.json().catch(() => ({}));
    const messageText = String(result?.message || '');
    const isNeedsActivation =
      messageText.toLowerCase().includes('activation') || messageText.toLowerCase().includes('activate');
    const isSuccess = result?.success === 'true' || result?.success === true;

    if (isNeedsActivation) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message:
          "FormSubmit sent an 'Activate Form' link to your Gmail (mdsiumcse@gmail.com). Please check your inbox and click it once to start receiving all submissions directly!",
        recipient: targetEmail,
      });
    }

    if (isSuccess || formSubmitRes.ok) {
      return NextResponse.json({
        success: true,
        message: 'Message delivered to your email successfully!',
        recipient: targetEmail,
      });
    }

    // Graceful fallback with 200 status so client can offer direct mailto without a fatal error
    return NextResponse.json({
      success: false,
      error: result?.message || 'Email delivery gateway temporarily busy. Please use the direct email button below.',
      fallbackEmail: targetEmail,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error?.message || 'Error occurred while processing message.',
      fallbackEmail: 'mdsiumcse@gmail.com',
    });
  }
}
