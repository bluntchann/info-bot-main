from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
from backend.schemas.user.usermodel import User

router = FastAPI()

users = {
    "user":"user123",
    "admin":"admin123"
}

class LoginModel(BaseModel):
    message: str

@router.post("/login")
async def login(request:User):
    if request.username not in users:
        raise HTTPException(status_code=404, detail="Username not found")
    if users[request.username] != request.password:
        raise HTTPException(status_code=404, detail="Password not found")
    return {"message":"success"}

