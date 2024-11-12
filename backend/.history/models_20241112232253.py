from pydantic import BaseModel
from datetime iport 
from beanie import Document, PydanticObjectId

class User(Document):
    id : PydanticObjectId = Field(default_factory=PydanticObjectId, alias="_id")
    username : str
    email : str
    password : str
    phone_number : str
    created_at : datetime.datetime = Field(default_factory=datetime.datetime.now)
    updated_at : datetime.datetime = Field(default_factory=datetime.datetime.now)
    