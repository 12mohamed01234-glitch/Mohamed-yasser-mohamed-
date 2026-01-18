
import { BusinessType, TemplateID } from '../types';

/**
 * 1. Template Storage & Selection Logic
 * Mapping business types to tested, high-converting templates.
 */
export const selectTemplate = (type: BusinessType): TemplateID => {
  switch (type) {
    case BusinessType.CLINIC:
    case BusinessType.LAW_FIRM:
    case BusinessType.ENGINEERING:
      return 'corporate_pro';
    case BusinessType.RESTAURANT:
    case BusinessType.RETAIL:
      return 'elegant_minimal';
    default:
      return 'modern_clean';
  }
};

/**
 * 2. Conceptual Python Backend Implementation (For the CTO)
 * This is how the logic looks on our FastAPI backend.
 */
export const backendInjectionLogicSnippet = `
def generate_html_site(site_data: SiteData):
    # Load the static pre-built HTML template file
    template_path = f"templates/{site_data.template_id}/index.html"
    with open(template_path, 'r') as f:
        html_content = f.read()

    # Injection Map (Safe replacements)
    replacements = {
        "{{BUSINESS_NAME}}": site_data.business_name,
        "{{PRIMARY_COLOR}}": site_data.preferred_color,
        "{{HERO_TITLE}}": site_data.generated_content.hero.title,
        "{{HERO_SUBTITLE}}": site_data.generated_content.hero.subtitle,
        "{{WHATSAPP_LINK}}": f"https://wa.me/{site_data.whatsapp_number}",
        # ... and so on for all sections
    }

    # Atomic string replacement ensures no malicious HTML is generated
    for placeholder, value in replacements.items():
        html_content = html_content.replace(placeholder, str(value))
    
    return html_content
`;
