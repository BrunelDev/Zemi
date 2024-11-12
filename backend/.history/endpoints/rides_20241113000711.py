from fastapi import APIRouter
from database.models import Ride
from dbconnection import ride_collection

router = APIRouter()

@router.post("/rides", response_model=Ride)
async def create_ride(ride: Ride):
    
    
    return {"message": "Ride created successfully"}
