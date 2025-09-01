# GDPR-Compliant Google Forms Setup Guide

This guide explains how to set up the Google Forms for the Kineto.ai contact system with full GDPR compliance.

## Prerequisites

1. **Google Workspace Account** with appropriate data processing agreements
2. **EU Data Residency** settings configured in Google Workspace Admin Console
3. **Data Processing Addendum (DPA)** signed with Google

## Step 1: Create English Contact Form

### Form Configuration
1. Go to Google Forms: https://forms.google.com/
2. Create a new form: "Contact Kineto.ai - AI Consultation Request"
3. Add the following fields:

#### Required Fields:
- **Name** (Short answer, Required)
- **Email** (Email validation, Required)  
- **Company** (Short answer, Required)
- **Phone** (Short answer, Optional)

#### Business Fields:
- **Industry** (Multiple choice, Optional)
  - Manufacturing & Industrial
  - Education
  - Healthcare & Life Sciences
  - Financial Services
  - Retail & E-commerce
  - Automotive
  - Technology & Software
  - Professional Services
  - Public Sector
  - Other

- **Inquiry Type** (Multiple choice, Required)
  - Free Consultation
  - AI Readiness Assessment
  - Custom Proposal
  - Course Information
  - General Inquiry

- **Message** (Paragraph, Required)
  - Placeholder: "Please describe your AI interests, challenges, or specific requirements..."

#### GDPR Compliance Fields:
- **Privacy Consent** (Checkboxes, Required)
  - "☐ I have read and agree to the [Privacy Policy](/privacy-policy.en/) regarding the processing of my personal data"
  - "☐ I consent to being contacted via email and phone regarding my inquiry"
  - "☐ I understand that I can withdraw my consent and request data deletion at any time by contacting contact@kineto.ai"

### Form Settings:
- **Response collection**: Enabled
- **Email notifications**: Enabled to contact@kineto.ai
- **Response validation**: Enable for email field
- **Confirmation message**: "Thank you for your inquiry! We'll respond within 24 hours during business days. Your data is processed according to our Privacy Policy."

## Step 2: Create German Contact Form

### Form Configuration (German)
1. Create form: "Kontakt Kineto.ai - KI-Beratungsanfrage"
2. Same structure as English form but in German:

#### Required Fields:
- **Name** (Kurze Antwort, Erforderlich)
- **E-Mail** (E-Mail-Validierung, Erforderlich)
- **Unternehmen** (Kurze Antwort, Erforderlich)
- **Telefon** (Kurze Antwort, Optional)

#### Business Fields:
- **Branche** (Multiple Choice, Optional)
  - Fertigung & Industrie
  - Bildung
  - Gesundheitswesen & Life Sciences
  - Finanzdienstleistungen
  - Einzelhandel & E-Commerce
  - Automotive
  - Technologie & Software
  - Unternehmensberatung
  - Öffentlicher Sektor
  - Andere

- **Art der Anfrage** (Multiple Choice, Required)
  - Kostenlose Beratung
  - KI-Bereitschaftsbewertung
  - Individuelles Angebot
  - Kursinformationen
  - Allgemeine Anfrage

- **Nachricht** (Absatz, Erforderlich)
  - Platzhalter: "Bitte beschreiben Sie Ihre KI-Interessen, Herausforderungen oder spezifischen Anforderungen..."

#### GDPR Compliance Fields:
- **Datenschutz-Einwilligung** (Checkboxes, Required)
  - "☐ Ich habe die [Datenschutzerklärung](/datenschutz/) zur Verarbeitung meiner personenbezogenen Daten gelesen und stimme zu"
  - "☐ Ich stimme zu, per E-Mail und Telefon bezüglich meiner Anfrage kontaktiert zu werden"
  - "☐ Mir ist bekannt, dass ich meine Einwilligung widerrufen und eine Datenlöschung jederzeit unter contact@kineto.ai beantragen kann"

### Confirmation Message (German):
"Vielen Dank für Ihre Anfrage! Wir antworten innerhalb von 24 Stunden während der Geschäftstage. Ihre Daten werden gemäß unserer Datenschutzerklärung verarbeitet."

## Step 3: Configure Data Processing Settings

### Google Workspace Admin Console:
1. Navigate to **Account > Data Processing Amendment**
2. Ensure **EU Data Residency** is enabled for Google Forms
3. Verify **Standard Contractual Clauses** are in place
4. Set **Data Retention Policy** according to business needs

### Form-Specific Settings:
1. **Response destination**: Store in Google Drive within EU region
2. **Access permissions**: Restrict to authorized personnel only
3. **Sharing settings**: Do not allow public access to responses
4. **Backup policy**: Regular exports for local backup (EU servers)

## Step 4: Update Website Integration

### Replace Placeholder URLs:
1. **English Form**: Replace `1FAIpQLScGNg9_example_form_id_here` with actual form ID
2. **German Form**: Replace `1FAIpQLScGNg9_example_form_id_here_de` with actual form ID

### Form ID Location:
- From Google Forms, click "Send" → "Embed HTML"
- Extract the form ID from the URL: `https://docs.google.com/forms/d/e/[FORM_ID]/viewform`

## Step 5: GDPR Compliance Checklist

### Legal Requirements ✓
- [x] Privacy Policy updated with Google Forms disclosure
- [x] Impressum pages include Google Forms usage
- [x] Google Workspace DPA signed
- [x] Standard Contractual Clauses for EU transfers
- [x] User consent mechanisms in forms
- [x] Data subject rights information provided

### Technical Requirements ✓
- [x] EU data residency configured
- [x] Form responses stored within EU
- [x] Access controls and permissions set
- [x] Email notifications to contact@kineto.ai
- [x] Response validation enabled
- [x] Confirmation messages with privacy reference

### Process Requirements ✓
- [x] 24-hour response time commitment
- [x] Data deletion process established (contact@kineto.ai)
- [x] Consent withdrawal mechanism documented
- [x] Regular compliance monitoring planned

## Step 6: Testing & Validation

### Form Functionality:
1. Test form submission with all field combinations
2. Verify email notifications arrive at contact@kineto.ai
3. Check mobile responsiveness of embedded forms
4. Validate GDPR consent requirements work correctly

### Privacy Compliance:
1. Verify privacy policy links work correctly
2. Test data deletion request process
3. Confirm EU data storage location
4. Validate consent withdrawal mechanism

## Step 7: Go-Live Process

1. **Replace placeholder form IDs** in contact pages
2. **Test both forms** thoroughly
3. **Verify email notifications** are working
4. **Document form URLs** for future reference
5. **Train team** on new contact form process
6. **Monitor compliance** regularly

## Ongoing Compliance

### Monthly Tasks:
- Review form submissions for compliance
- Check data retention adherence
- Verify EU data residency settings
- Monitor Google Workspace DPA updates

### Quarterly Tasks:
- Audit form access permissions
- Review and update privacy notices if needed
- Test data deletion request process
- Compliance training updates

### Annual Tasks:
- Full GDPR compliance audit
- Google Workspace agreement review
- Privacy policy comprehensive update
- Legal requirements assessment

## Support & Documentation

### Key Resources:
- Google Workspace Privacy Notice: https://workspace.google.com/terms/2013_1/privacy_notice.html
- Google Privacy Policy: https://policies.google.com/privacy
- GDPR Compliance Guide: https://gdpr.eu/
- German BDSG Information: https://www.gesetze-im-internet.de/bdsg_2018/

### Contact for Issues:
- Technical: Google Workspace Support
- Legal: Legal counsel familiar with GDPR
- Internal: contact@kineto.ai

This setup ensures full GDPR compliance while providing a seamless contact experience for potential clients.