from app import db

class egrul(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(256), unique=True, nullable=True)
    inn = db.Column(db.String(10), unique=True, nullable=True)
    kpp = db.Column(db.String(10), unique=True, nullable=True)
    adress = db.Column(db.String(255), unique=False, nullable=True)
    l_surname = db.Column(db.String(30), unique=False, nullable=True)
    l_name = db.Column(db.String(30), unique=False, nullable=True)
    l_secondname = db.Column(db.String(30), unique=False, nullable=True)
    buis_type = db.Column(db.String(30), unique=False, nullable=True)
    phone = db.Column(db.String(100), unique=False, nullable=True)
    email = db.Column(db.String(100), unique=False, nullable=True)
    profit = db.Column(db.Float)
    buis_price = db.Column(db.Float)
    edo = db.Column(db.String(50), unique=True, nullable=True)
    reg_num_pf = db.Column(db.String(12), unique=True, nullable=True)
    fil_code = db.Column(db.String(256), unique=False, nullable=True)
    site = db.Column(db.String(100), unique=False, nullable=True)
    egais = db.Column(db.String(30), unique=False, nullable=True)
    GLN = db.Column(db.String(20), unique=False, nullable=True)

    def __repr__(self):
        return {'id':self.id, 'title':self.title, 'inn':self.inn}