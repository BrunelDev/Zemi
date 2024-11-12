from motor.motor_asyncio import AsyncIOMotorClient

client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client.get_database("taxi")

wallet_collection = db.get_collection("wallets")
user_collection = db.get_collection("users")
driver_collection = db.get_collection("drivers")
vehicule_collection = db.get_collection("vehicules")
ride_collection = db.get_collection("rides")
rating_collection = db.get_collection("ratings")

