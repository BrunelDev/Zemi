from motor.motor_asyncio import AsyncIOMotorClient

client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client.get_database("taxi")

wallet_collection = db.get_collection("wallets")
