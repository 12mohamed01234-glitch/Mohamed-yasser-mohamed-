
from datetime import datetime
import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Enum, JSON, Boolean
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import DeclarativeBase, relationship

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    sites = relationship("Site", back_populates="owner")

class Site(Base):
    __tablename__ = "sites"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    business_name = Column(String, nullable=False)
    business_type = Column(String, nullable=False)
    subdomain = Column(String, unique=True, index=True)
    template_id = Column(String, nullable=False)
    language = Column(String, default="en")
    color_scheme = Column(String)
    
    # The "Hydration" data from AI
    content_json = Column(JSONB, nullable=False)
    
    status = Column(String, default="draft") # draft, published, archived
    created_at = Column(DateTime, default=datetime.utcnow)
    
    owner = relationship("User", back_populates="sites")
