FROM python:3.10.9

SHELL ["/bin/bash", "-c"]

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

EXPOSE 8000

RUN pip install --upgrade pip

RUN apt update && apt -qy install gcc libjpeg-dev libxslt-dev \
    libpq-dev libmariadb-dev libmariadb-dev-compat gettext cron openssh-client flake8 locales vim

RUN useradd -rms /bin/bash Meschat && chmod 777 /opt /run

WORKDIR /Meschat

COPY --chown=Meschat:Meschat . .

RUN pip install -r requirements.txt

USER Meschat

CMD ["python", "manage.py", "runserver"]