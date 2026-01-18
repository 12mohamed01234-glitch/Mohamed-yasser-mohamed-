
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from .database import get_db
from .models import User, Site
from .schemas import UserCreate, UserOut, Token, SiteCreate, SiteOut
from .core.security import hash_password, verify_password, create_access_token, get_current_user
from .services.ai import AIService

app = FastAPI(title="SmartSite AI API")
ai_service = AIService()

@app.post("/auth/signup", response_model=UserOut)
async def signup(user_in: UserCreate, db: AsyncSession = Depends(get_db)):
    # Check if user exists, hash password, save to DB
    pass

@app.post("/auth/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    # Authenticate and return JWT
    pass

@app.post("/sites/generate", response_model=SiteOut)
async def create_site(
    site_in: SiteCreate, 
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    The Core SaaS Workflow:
    1. Call AI to generate copy
    2. Pick a pre-built template
    3. Save to Postgres
    4. Return ID for the frontend to render
    """
    try:
        # AI Copywriting
        generated_content = await ai_service.generate_site_content(site_in)
        
        # Template Selection
        template_id = ai_service.select_template(site_in.business_type)
        
        # Persistence
        new_site = Site(
            owner_id=current_user.id,
            business_name=site_in.business_name,
            business_type=site_in.business_type,
            template_id=template_id,
            content_json=generated_content,
            language=site_in.language,
            color_scheme=site_in.preferred_color
        )
        
        db.add(new_site)
        await db.commit()
        await db.refresh(new_site)
        
        return new_site
        
    except Exception as e:
        await db.rollback()
        raise HTTPException(status_code=500, detail=f"Generation failed: {str(e)}")

@app.get("/sites/my-sites", response_model=List[SiteOut])
async def list_sites(current_user: User = Depends(get_current_user)):
    return current_user.sites
