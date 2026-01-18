
import os
import json
import google.generativeai as genai
from ..schemas import SiteCreate

class AIService:
    def __init__(self):
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    async def generate_site_content(self, data: SiteCreate) -> dict:
        prompt = f"""
        Act as a professional Middle East business consultant.
        Generate structured JSON website content for:
        Name: {data.business_name}
        Type: {data.business_type}
        Description: {data.services_description}
        Language: {data.language}
        
        Return ONLY valid JSON with sections: hero, about, services (3 items), contact.
        Include FontAwesome icon names for services.
        """
        
        response = self.model.generate_content(
            prompt,
            generation_config={"response_mime_type": "application/json"}
        )
        
        return json.loads(response.text)

    def select_template(self, business_type: str) -> str:
        # Business logic for template selection
        corporate_types = ["Clinic", "Lawyer", "Engineer"]
        if any(t in business_type for t in corporate_types):
            return "corporate_v1"
        return "modern_v1"
