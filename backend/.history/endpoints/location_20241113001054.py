from fastapi import APIRouter
from database.models import Location
from dbconnection import location_collection

router = APIRouter()

@router.post("/locations", response_model=Location)
async def create_location(location: Location):
    return {"message": "Location created successfully"}