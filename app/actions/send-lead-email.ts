'use server'

interface LeadData {
  source: string // z.B. "Quick Quote Wizard", "Kontaktformular", etc.
  projectType?: string
  roomSize?: string
  timeframe?: string
  contact: {
    name: string
    phone?: string
    email?: string
  }
  timestamp: string
  userAgent?: string
}

export async function sendLeadEmail(data: LeadData) {
  try {
    // In einer produktiven Umgebung würde hier ein E-Mail-Service wie:
    // - Resend (resend.com)
    // - SendGrid
    // - AWS SES
    // - Postmark
    // verwendet werden.
    
    // Da wir in der v0-Umgebung keine externen Services einbinden können,
    // loggen wir die E-Mail und simulieren den Versand.
    
    const emailContent = `
Neue Anfrage über mb.Raumtrend Website
========================================

Quelle: ${data.source}
Zeitstempel: ${data.timestamp}
User Agent: ${data.userAgent || 'Nicht verfügbar'}

KONTAKTDATEN:
-------------
Name: ${data.contact.name}
${data.contact.phone ? `Telefon: ${data.contact.phone}` : ''}
${data.contact.email ? `E-Mail: ${data.contact.email}` : ''}

${data.projectType ? `PROJEKTDETAILS:
--------------
Art des Projekts: ${data.projectType}
Raumgröße: ${data.roomSize || 'Nicht angegeben'}
Zeitrahmen: ${data.timeframe || 'Nicht angegeben'}
` : ''}

Diese E-Mail wurde automatisch über die Website mb-raumtrend.de generiert.
    `.trim()

    console.log('[v0] Lead-E-Mail Inhalt:', emailContent)
    
    // TODO: Hier E-Mail-Service integrieren
    // Beispiel mit Resend:
    // const { data: emailData, error } = await resend.emails.send({
    //   from: 'website@mb-raumtrend.de',
    //   to: 'info@mb-raumtrend.de',
    //   subject: `Neue Anfrage: ${data.source} - ${data.contact.name}`,
    //   text: emailContent,
    // })
    
    // if (error) {
    //   console.error('[v0] E-Mail-Versand fehlgeschlagen:', error)
    //   return { success: false, error: error.message }
    // }

    // Simulation: Erfolgreicher Versand
    return { 
      success: true, 
      message: 'E-Mail erfolgreich vorbereitet (E-Mail-Service muss noch konfiguriert werden)' 
    }
    
  } catch (error) {
    console.error('[v0] Fehler beim E-Mail-Versand:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unbekannter Fehler' 
    }
  }
}
