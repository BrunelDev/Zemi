from pydantic import BaseModel, Field
from datetime import datetime
from beanie import Document, PydanticObjectId
from typing import Optional, List

class User(Document):
    id : PydanticObjectId = Field(default_factory=PydanticObjectId, alias="_id")
    username : str
    email : str
    password : str
    phone_number : str
    created_at : datetime.datetime = Field(default_factory=datetime.now)
    updated_at : datetime = Field(default_factory=datetime.now)
    ID_card_i
    