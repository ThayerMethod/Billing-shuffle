from fastapi import FastAPI
from app.api.v1 import billing, auth
from app.config import settings
from app.models import Base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

app = FastAPI(title="Billing Orchestration Platform")

# Database setup
DATABASE_URL = settings.DATABASE_URL
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base.metadata.create_all(bind=engine)

# Include API routes
app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(billing.router, prefix="/api/v1/billing", tags=["Billing"])
