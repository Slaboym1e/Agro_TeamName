from backapp.__init__ import Base, engine
from sqlalchemy import Column, Integer, String, Float, Date

class geoobject(Base):
    __tablename__ = 'geo_objects'
    id = Column(Integer, primary_key=True)
    lat = Column(Float)
    lon = Column(Float)
    adress = Column(String(255), unique=False, nullable=True)

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


class nvos(Base):
    __tablename__="nvos"
    id = Column(Integer, primary_key=True)
    objectcode = Column(String(20), unique=False, nullable=True)
    title = Column(String(256), unique=False, nullable=True)
    oktmo = Column(String(10), unique=False, nullable=True)
    adress = Column(String(255), unique=False, nullable=True)
    orgname = Column(String(256), unique=False, nullable=True)
    uradress = Column(String(255), unique=False, nullable=True)
    inn = Column(String(10), unique=False, nullable=True)
    ogrn = Column(String(15), unique=False, nullable=True)
    okved = Column(String(128), unique=False, nullable=True)
    nvoscategory = Column(Integer)
    assignmentcrits = Column(String(128), unique=False, nullable=True)
    sources = Column(Integer)
    totalemiss = Column(Float)
    dischnum = Column(Integer)
    wasteobjquantity = Column(Integer)
    dischco2 = Column(Float)
    registration = Column(Date)
    actualdate = Column(Date)
    exclusiondate = Column(Date)
    commissioningdate = Column(Date)




Base.metadata.create_all(bind=engine)