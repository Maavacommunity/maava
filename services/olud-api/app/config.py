from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    dynamodb_endpoint: str = "http://localhost:8000"
    aws_region: str = "us-east-1"
    environment: str = "development"


settings = Settings()
