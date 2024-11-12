
from pymongo.server_api import ServerApi
from beanie import init_beanie
from database.models import User, Admin, Driver, Vehicule, Ride, Rating, Payment, Notification, Location
from motor.motor_asyncio import AsyncIOMotorClient
uri = "mongodb+srv://ahokpossibrunel:QhdRZxFomM0OVhRh@todo.7guum.mongodb.net/?retryWrites=true&w=majority&appName=TODO"

# Create a new client and connect to the server
client = AsyncIOMotorClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
db = client["TODO"]
user_
async def init():
    await init_beanie(database=db, document_models=[User,  Admin, Driver, Vehicule, Ride, Rating, Payment, Notification, Location])
