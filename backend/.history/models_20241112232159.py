from pydantic import BaseModel
from beanie import Document, PydanticObjectId

class User(Document):
    id : PydanticObjectId = Field(default_factory=PydanticObjectId, alias="_id")
    username : str
    email : str
    password : str
    
    