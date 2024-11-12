from fastapi import APIRouter
from database.models import Ride

router = APIRouter()

@router.post("/rides", resp)
async def create_ride(ride: Ride):
    return {"message": "Ride created successfully"}
