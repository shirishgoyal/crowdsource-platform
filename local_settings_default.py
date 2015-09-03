DEBUG = True
COMPRESS_OFFLINE = False

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "crowdsource_dev"
    }
}