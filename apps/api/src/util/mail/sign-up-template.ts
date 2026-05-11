export const signUpMailTemplate = async (userName: string, link: string) => {
  return `
    <!doctype html>
    <html lang="tr">
      <head>
        <meta charset="utf-8" />
        <title>Adakan Library Core</title>
      </head>
      <body style="margin:0;background:#f6f7fb;font-family:Arial,sans-serif;color:#111827;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:28px 32px;border-bottom:1px solid #e5e7eb;">
                    <strong style="font-size:20px;">Adakan Library Core</strong>
                    <div style="font-size:13px;color:#6b7280;margin-top:6px;">Adakan Software</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px;">
                    <h1 style="font-size:24px;line-height:1.3;margin:0 0 16px;">Hesabini onayla</h1>
                    <p style="font-size:15px;line-height:1.7;margin:0 0 20px;">Merhaba ${userName}, Adakan Library Core hesabini kullanmaya baslamak icin e-posta adresini onayla.</p>
                    <a href="${link}" style="display:inline-block;background:#111827;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:700;">E-postayi onayla</a>
                    <p style="font-size:13px;color:#6b7280;line-height:1.6;margin:24px 0 0;">Bu istegi sen baslatmadiysan bu e-postayi yok sayabilirsin.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 32px;background:#f9fafb;color:#6b7280;font-size:12px;">
                    Adakan Software • adakansoftware@gmail.com • 5399416521
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};
