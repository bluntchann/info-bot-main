from fastapi import FastAPI
from backend.middleware.APIS.LoginPackage.login import login
app = FastAPI()

app.include_router(login.router)
# @app.post("/api/login")
# async def root():
#     return {"message": "Hello World"}
#
#
# @app.get("/hello/{name}")
# async def say_hello(name: str):
#     return {"message": f"Hello {name}"}
