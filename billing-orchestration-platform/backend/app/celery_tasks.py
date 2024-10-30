from celery import Celery
from app.billing_integrations.aws import fetch_aws_billing_data

celery_app = Celery(__name__, broker="redis://localhost:6379/0")

@celery_app.task
def fetch_billing():
    fetch_aws_billing_data()
    # Add more integrations here as needed
