from fastapi import APIRouter
from database import Ride

router = APIRouter()

@router.post("/rides", re)
async def create_ride(ride: Ride):
    return {"message": "Ride created successfully"}
