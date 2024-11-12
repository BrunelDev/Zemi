from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from dbconnection import user_collection
from bson import ObjectId
from beanie.odm.fields import PydanticObjectId

router = APIRouter()

@router.post("/login")
async def login(user: User):
    return {"message": "Login successful"}
