from fastapi import FastAPI
from contextlib import asynccontextmanager
from dbconnection import init

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init()
    yield

app = FastAPI(lifespan=lifespan)


if __name__ == "__main__":
