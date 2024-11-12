from pydantic import BaseModel, Field, EmailStr, constr
from datetime import datetime
from beanie import Document, PydanticObjectId
from typing import Optional, List

class User(Document):
    id : PydanticObjectId = Field(default_factory=PydanticObjectId, alias="_id")
    username : str
    email : EmailStr
    password : str
    phone_number : str
    created_at : datetime = Field(default_factory=datetime.now)
    updated_at : datetime = Field(default_factory=datetime.now)
    ID_card_image : Optional[str] = None
    profile_image : Optional[str] = None
    wallet : PydanticObjectId = Field(default_factory=PydanticObjectId)
    role : str = Field(default="user")
    rating : float = Field(default=0.0)
    is_verified : bool = Field(default=False)
    is_active : bool = Field(default=True)
    is_banned : bool = Field(default=False)
    rides : List[PydanticObjectId] = Field(default_factory=list)
    payments : List[PydanticObjectId] = Field(default_factory=list)
    rating_history : List[float] = Field(default_factory=list)
    
    
    
    
    