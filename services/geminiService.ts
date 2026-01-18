
import { GoogleGenAI, Type } from "@google/genai";
import { UserInput, SiteContent, Language } from "../types";

export const generateSiteContent = async (input: UserInput): Promise<SiteContent> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are a professional website copywriter and business consultant specialized in the Middle East market.
    Your task is to generate high-converting website content in ${input.language}.
    Target Audience: Local customers in Egypt and GCC.
    Tone: Professional, trustworthy, and welcoming.
    Format: Return ONLY valid JSON.
  `;

  const prompt = `
    Generate website content for a "${input.businessType}" named "${input.businessName}".
    Business Services Description: ${input.servicesDescription}
    Primary Language: ${input.language}
    WhatsApp: ${input.whatsappNumber}

    Structure the content into four sections: Hero, About, Services (list 3 services), and Contact.
    For each service, suggest a FontAwesome icon name (e.g., 'fa-heart', 'fa-code').
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          hero: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              subtitle: { type: Type.STRING },
              cta: { type: Type.STRING }
            },
            required: ["title", "subtitle", "cta"]
          },
          about: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["title", "description"]
          },
          services: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              items: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    description: { type: Type.STRING },
                    icon: { type: Type.STRING }
                  },
                  required: ["name", "description", "icon"]
                }
              }
            },
            required: ["title", "items"]
          },
          contact: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              address: { type: Type.STRING },
              email: { type: Type.STRING },
              whatsapp: { type: Type.STRING },
              workingHours: { type: Type.STRING }
            },
            required: ["title", "address", "email", "whatsapp", "workingHours"]
          }
        },
        required: ["hero", "about", "services", "contact"]
      }
    }
  });

  try {
    const text = response.text;
    return JSON.parse(text) as SiteContent;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("AI Content Generation Failed");
  }
};
