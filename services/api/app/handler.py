from mangum import Mangum

from app.main import app

# Entry point for AWS Lambda (API Gateway proxy integration).
handler = Mangum(app)
