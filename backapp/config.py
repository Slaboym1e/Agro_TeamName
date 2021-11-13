import os
basedir = os.path.abspath(os.path.dirname(__file__))

class configBD(object):
    SQLALCHEMY_DIALECT  = 'mysql'
    SQLALCHEMY_DRIVER   = 'pymysql'
    SQLALCHEMY_USER     = 'a0529774_agrohach'
    SQLALCHEMY_PASSWORD = 'd8z341Cs'
    SQLALCHEMY_HOST     = '141.8.192.26'
    SQLALCHEMY_DBNAME   = 'a0529774_agrohach'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DIALECT+'+'+SQLALCHEMY_DRIVER+'://'+\
                              SQLALCHEMY_USER+':'+SQLALCHEMY_PASSWORD+'@'+\
                              SQLALCHEMY_HOST+'/'+SQLALCHEMY_DBNAME
class config(object):
    DEBUG = True
    TESTING = False
    SECRET_KEY = 'bfa2b3bb5087fdae1bae5349aabceca8cc50f44c'
