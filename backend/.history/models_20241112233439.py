from bson import ObjectId
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
    is_active : bool = Field(default=True)
    is_banned : bool = Field(default=False)
    rides : List[PydanticObjectId] = Field(default_factory=list)
    payments : List[PydanticObjectId] = Field(default_factory=list)
    rating_history : List[float] = Field(default_factory=list)
    last_login : datetime = Field(default_factory=datetime.now)
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId : str
        }
    class Collection:
        name = "users"
class Driver(User):
    is_verified : bool = Field(default=False)
    registration_certificate : Optional[str] = None
    driver_license : Optional[str] = None
    ve
    license_plate : str
    car_model : str
    car_color : str
    class Collection:
        name = "drivers"
        
    
    
    
    