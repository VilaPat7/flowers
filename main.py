from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database setup
DATABASE_URL = "sqlite:///./flowers.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Flower(Base):
    __tablename__ = "flowers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    note = Column(String)

Base.metadata.create_all(bind=engine)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Models
class FlowerCreate(BaseModel):
    name: str
    note: str = None

class FlowerResponse(FlowerCreate):
    id: int

    class Config:
        orm_mode = True

# Routes
@app.get("/flowers/", response_model=List[FlowerResponse])
def get_favorite_flowers(db: Session = Depends(get_db)):
    flowers = db.query(Flower).all()
    return flowers

@app.post("/flowers/", response_model=FlowerResponse)
def add_flower(flower: FlowerCreate, db: Session = Depends(get_db)):
    db_flower = Flower(name=flower.name, note=flower.note)
    db.add(db_flower)
    db.commit()
    db.refresh(db_flower)
    return db_flower

@app.delete("/flowers/{flower_id}")
def delete_flower(flower_id: int, db: Session = Depends(get_db)):
    flower = db.query(Flower).filter(Flower.id == flower_id).first()
    if flower is None:
        raise HTTPException(status_code=404, detail="Flower not found")
    db.delete(flower)
    db.commit()
    return {"message": "Flower deleted successfully"}
