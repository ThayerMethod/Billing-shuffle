from fastapi import APIRouter, HTTPException
from authlib.integrations.starlette_client import OAuth

router = APIRouter()
oauth = OAuth()

# AWS OAuth configuration
aws = oauth.register(
    name="aws",
    client_id="YOUR_CLIENT_ID",
    client_secret="YOUR_CLIENT_SECRET",
    authorize_url="https://signin.aws.amazon.com/oauth",
    access_token_url="https://signin.aws.amazon.com/oauth/token",
)

@router.get("/login")
async def login():
    return await aws.authorize_redirect("http://localhost:8000/api/v1/auth/callback")

@router.get("/callback")
async def callback():
    token = await aws.authorize_access_token()
    return {"token": token}
