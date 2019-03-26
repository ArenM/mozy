FROM alpine:latest

COPY ./requirements.txt /

RUN apk add python3
RUN pip3 install -r requirements.txt

ENV FLASK_ENV=development

WORKDIR /srv
ENTRYPOINT ["flask", "run", "-h", "0.0.0.0"]
