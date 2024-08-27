from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict
from dotenv import load_dotenv
load_dotenv()

class Settings(BaseSettings):
    auth0_audience: str
    auth0_domain: str
    client_origin_url: str
    port: int
    reload: bool

    model_config = SettingsConfigDict(
        case_sensitive=False,
        env_file="../.env",
        env_file_encoding="utf-8",
        env_ignore_empty=True,
        extra="ignore"
    )

    @field_validator("client_origin_url", "auth0_audience", "auth0_domain")
    @classmethod
    def check_not_empty(cls, v):
        assert v != "", f"{v} is not defined"
        return v


settings = Settings()
