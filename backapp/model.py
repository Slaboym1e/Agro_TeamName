from backapp.__init__ import Base, engine
from sqlalchemy import Column, Integer, String, Float


class egrul(Base):
    __tablename__ = 'egrul'
    id = Column(Integer, primary_key=True)
    title = Column(String(256), unique=True, nullable=True)
    inn = Column(String(10), unique=True, nullable=True)
    kpp = Column(String(10), unique=False, nullable=True)
    adress = Column(String(255), unique=False, nullable=True)
    l_surname = Column(String(30), unique=False, nullable=True)
    l_name = Column(String(30), unique=False, nullable=True)
    l_secondname = Column(String(30), unique=False, nullable=True)
    buis_type = Column(String(30), unique=False, nullable=True)
    phone = Column(String(100), unique=False, nullable=True)
    email = Column(String(100), unique=False, nullable=True)
    profit = Column(Float)
    buis_price = Column(Float)
    edo = Column(String(50), unique=False, nullable=True)
    reg_num_pf = Column(String(12), unique=False, nullable=True)
    fil_code = Column(String(256), unique=False, nullable=True)
    site = Column(String(100), unique=False, nullable=True)
    egais = Column(String(30), unique=False, nullable=True)
    GLN = Column(String(20), unique=False, nullable=True)

    def __repr__(self):
        return {'id':self.id, 'title':self.title, 'inn':self.inn}


Base.metadata.create_all(bind=engine)