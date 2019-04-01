FROM alpine:latest

COPY ./requirements.txt /

RUN apk add python3
RUN pip3 install -r requirements.txt; pip3 install pudb

ENV FLASK_ENV=development

EXPOSE 5000
WORKDIR /srv
ENTRYPOINT ["flask", "run", "-h", "0.0.0.0"]
