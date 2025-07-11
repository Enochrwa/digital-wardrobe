from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn
import os
import tensorflow as tf
from app.db import database
from app.db.database import Base
from app import models # Assuming models.py is in backend/app/

from app.routers import (
    auth,
    wardrobe,
    outfits,
    weekly_plans,
    occasions,
    style_history,
    statistics,
    ai_analyzer, # Or whatever you named the AI router file
    recommendations, # Or whatever you named it
    user_profile, # Added new user_profile router
    community,      # Added new community router
)
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"
Base.metadata.create_all(bind=database.engine) # This creates tables if they don't exist
app = FastAPI()

# Mount static files directory
# This should be done before including routers if routers depend on static paths at startup,
# though for serving files, order might not strictly matter unless complex path overlaps.
os.makedirs("static", exist_ok=True) # Ensure the base static directory exists
app.mount("/static", StaticFiles(directory="static"), name="static")

# Register routers
app.include_router(auth.router, prefix="/api")
app.include_router(wardrobe.router, prefix="/api")
app.include_router(outfits.router, prefix="/api")
app.include_router(weekly_plans.router, prefix="/api")
app.include_router(occasions.router, prefix="/api")
app.include_router(style_history.router, prefix="/api")
app.include_router(statistics.router, prefix="/api")
app.include_router(ai_analyzer.router, prefix="/api") # Assuming other routers also have /api prefix
app.include_router(recommendations.router, prefix="/api")
app.include_router(user_profile.router, prefix="/api") # Added new user_profile router
app.include_router(community.router, prefix="/api")     # Added new community router


@app.get("/")
async def root():
    return {"message": "Hello World"}


# Run Uvicorn when executing: python main.py
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,  # Remove in production
        workers=1,  # Adjust as needed
        log_level="info",
    )
