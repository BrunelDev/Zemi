from fastapi import FastAPI
from dbconnection import init

app = FastAPI()

@app.on_event("startup")
async def startup_db_client():
    await init()