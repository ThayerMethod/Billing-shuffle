from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class BillingRecord(Base):
    __tablename__ = "billing_records"
    id = Column(Integer, primary_key=True, index=True)
    service_name = Column(String, index=True)
    cost = Column(Float)
    date = Column(Date)
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="billing_records")
