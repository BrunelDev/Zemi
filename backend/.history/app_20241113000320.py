from fastapi import FastAPI
from contextlib import asynccontextmanager
from dbconnection import init
from auth.login import router as login_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init()
    yield

app = FastAPI(lifespan=lifespan)

app.include_router()


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
