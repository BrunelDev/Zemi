from fastapi import APIRouter

router = APIRouter()

@router.get("/rides")
async def get_rides():
    return {"message": "Rides fetched successfully"}