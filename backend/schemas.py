
from pydantic import BaseModel, EmailStr, Field
from uuid import UUID
from datetime import datetime
from typing import Optional, Dict, Any, List

# Auth Schemas
class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: UUID
    email: EmailStr
    created_at: datetime
    class Config: from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

# Site Schemas
class SiteCreate(BaseModel):
    business_name: str
    business_type: str
    services_description: str
    preferred_color: str
    language: str
    whatsapp_number: str

class SiteOut(BaseModel):
    id: UUID
    business_name: str
    template_id: str
    content_json: Dict[str, Any]
    status: str
    created_at: datetime
    class Config: from_attributes = True
